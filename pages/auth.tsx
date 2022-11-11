// this is the authentication page
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";
import global from "../styles/Global.module.scss";
import styles from "../styles/Auth.module.scss";
import { auth, db } from "../.env/firebase";
import * as firebase from "firebase/compat/app";
import data from "../public/Major_Names.json";
import Error from "../components/error";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable, uploadString } from "firebase/storage";
import { app, firestore } from '../firebase';
import { collection, addDoc, getDoc, getDocs, query, where } from 'firebase/firestore';
import GooglePlacesAutocomplete, { getLatLng } from 'react-google-places-autocomplete';
import { useRouter } from "next/router";
import { Value } from "sass";
const dbInstance = collection(firestore, 'users');
const dbEmailInstance = collection(firestore, 'emails');


const Authentication = () => {
  let [err, setError] = React.useState({ active: false, code: 0 , error: true});
  let [pageNo, change] = React.useState(1);
  let [imageUrl, changeUrl] = React.useState("");
  let [location, selectLocation] = React.useState(null as any)
  let [userInformation, addInfo] = React.useState({
    email: "",
    name: "",
    major: "",
    country: "",
    city: "",
    picture: "",
    lat: null,
    lng: null
  });
  const router = useRouter()
  async function checkEmail(email: string,n:number) {
    // if email tests pass submit it to firebase
    // return submitEmail(email,n);

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(emailPattern)) {
      return signInUser(email,n);
    }
    else {
      await error(5);
    }
  }
  async function error(code: number, isError: boolean=true) {
    setError({ active: !err.active, code: code , error:isError});
    if (!err.active) {
      await new Promise((f) => setTimeout(f, 3000));
      // restore defaults
      setError({ active: err.active, code: code, error:isError });
    }
  }
   async function uploadFile(): Promise<string>{
    const uploadRef = ref(storage, "storage/"+image?.name);
    
    const uploadTask =  await uploadBytesResumable(uploadRef, image as any)
    const imageUrl = await getDownloadURL(uploadTask.ref).then((downloadURL) => {
        
          console.log('File available at', downloadURL);
          changeUrl(downloadURL)
          userInformation.picture = downloadURL;
          return downloadURL;
        }).catch(async (er)=>{
          await error(2)
        });
  return imageUrl!
  }
  function submitEmail(email: string,n:number): boolean {
    // const auth = getAuth(app);
    // change(n)
    auth
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        userInformation.email = email;
        window.localStorage.setItem("email", email);
        error(6,false)
        return true;
      })
      .catch(async (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // or whichever error will appear here
         await error(1);
      });
    return false;
  }
 
  function getInputVal(name: string) {
    return (document.getElementById(name) as HTMLInputElement).value;
  }
  async function signInUser(email: string, n: any){
    // check is user is in firebase 
    const q = query(dbEmailInstance, where("email", "==", email));

    const querySnapshot = await getDocs(q);
    if(querySnapshot.size<1){
        // the user doesn't exist in the database. Send an email
        await submitEmail(email,n)
    }
    else{
      change(n)
       querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    }
   
  }
  useEffect(() => {
    let email = window.location.href.split('/')[3]
    if(email.split("?").length>1){
      let emailAddress = email.split("?")[1].split("=")[1].split("&")[0].replace("%40","@")
      // set to local storage and input value
      console.log(emailAddress)
      window.localStorage.setItem("email", emailAddress);
      (document.getElementById("email") as HTMLInputElement).value = emailAddress
      checkEmail(emailAddress,2)

    }
},[]);
  const getLatLng = async (placeId: string) => {
    try {
      const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyDcjNrNrDamH1BaZ6BtgvWY3ENNx5QXoM4`);
      const obj = await res.json();
      console.log(obj)
      // var obj = JSON.parse(data);
      let lat =  obj.results[0].geometry.location.lat;
      let lng =  obj.results[0].geometry.location.lng; 
      userInformation.lat = lat;
      userInformation.lng = lng;
      await uploadFile();
      await addInfo({
        email:  window.localStorage.getItem("email") || getInputVal("email"),
        name: getInputVal("name"),
        major: getInputVal("major"),
        city: location?.label.split(',').slice(0,-1),
        country: location?.label.split(',').slice(-1),
        picture: imageUrl,
        lat: obj.results[0].geometry.location.lat,
        lng: obj.results[0].geometry.location.lng
      });
      console.log(userInformation)
      console.log(image)
      addDoc(dbInstance, userInformation).then(async()=>{
          await error(3, false)
          router.replace('/')
      })
      return ({lat: lat, lng: lng})
    } catch (err) {
      console.log(err);
    }
  };
  
  //constant for allowing the image to be null when no image selected 
  const [Image] = useState(null);
  //constant for image from user
  const [image, setImage] = useState<File>();
  //constant for image preview (string since we are using image URL)
  const [preview, setPreview] = useState<string>()
  //show preview of image
  useEffect(()=>{
    if(image){
      //data reader
      const reader = new FileReader(); 
      //activate when selection is done
      reader.onloadend = ()=>{
        setPreview(reader.result as string)
      }
      //read as data url
      reader.readAsDataURL(image);
    }else{
      error;
    }
  },[image])


    {/*Needed to work with firebase storage (sending images)*/}
    const storage = getStorage();
    const storageRef = ref(storage, "storage");
    const imagesRef = storageRef;
    const message1 = "input-storage";
   // uploadString(storageRef, message1).then((snapshot) => {
        //   console.log(snapshot)
        //   console.log("Successful upload!");
        // });
    
   async function next(e: any, n: number) {
    e.preventDefault();
    console.log(n);
    switch (n) {
      case 2:
        const email = getInputVal("email");
        window.localStorage.setItem("email", email)
        console.log(window.localStorage.getItem("email"))
        //check email then proceed to call below function
        checkEmail(email,n) ;
        break;
      case 3:
      // add if user information is null - use kris function coral
        userInformation.name = getInputVal("name");
        userInformation.major = getInputVal("major");
        userInformation.city = location?.label.split(',').slice(0,-1);
        userInformation.country = location?.label.split(',').slice(-1);
        userInformation.email = getInputVal("email");
        if(userInformation.name=="" || userInformation.major=="" || userInformation.city=="" || userInformation.country=="" || userInformation.email==""){
            
            if(userInformation.city==""){
              await error(7)
            }
            else{
              await error(4);
            }
        }
        else{
           change(n);
        }
       
        break;
      case 0:
        if(image){
          await getLatLng(location.value.place_id)
        
          window.localStorage.clear()
        }
        else{
          await error(8)
        }
       
        break;
      default:
        change(n);
        break;
    }
  }
  function back(e: any, n: number) {
    e.preventDefault();
    change(n);
  }
 
  return (
    <div className={global.font}>
      <form className={styles.center_flex}>
        {/* step one: email input */}
        <div className={pageNo == 1 ? styles.form : global.hidden}>
          <h1>Type your student email</h1>

          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email">
          </input>
          <div className={styles.bottomBtns} >
            <button className={`${global.button_primary} ${global.button}`} onClick={(e) => next(e, 2)}> Next </button>
          </div>
        </div>
        {/* step two: image input */}
        <div className={pageNo == 2 ? styles.form : global.hidden}>
          <h1>add information</h1>
          <p>Name</p>
          <input type="text" placeholder="Name" name="name" id="name"></input>
          <p>Major</p>
          <select name="major" id="major">
            {data["MAIN"].map((val)=><option value={val['Major Name']} key={val['Major Name']}>{val["Major Name"]}</option>)}
        </select>
        <p>Type your city of origin below</p>
        <div className={styles.input}>
            <GooglePlacesAutocomplete
                apiKey="AIzaSyDcjNrNrDamH1BaZ6BtgvWY3ENNx5QXoM4"
                selectProps={{
                  location,
                  onChange: selectLocation,
                  styles: {
                    input: (provided: any) => ({
                      ...provided,
                      height: '60px',
                      width: '39vw',
                      color: '#486966',
                    }),
                    option: (provided: any) => ({
                      ...provided,
                      color: '#486966',
                      height: '60px',
                      width: '39vw',
                    }),
                    singleValue: (provided:any) => ({
                      ...provided,
                      color: '#486966',
                      width: '39vw',    
                    }),
                  },
                }}
              />
        </div>
          <p>Country Of Origin: <strong>{location?.label.split(',').slice(-1)}</strong></p>
          <p>City of Origin: <strong>{location?.label.split(',').slice(0,-1)}</strong></p>
          <div  className={styles.bottomBtns}>
            <button className={`${global.button_secondary} ${global.button}`}  onClick={(e) => back(e, 1)}> back </button>
           
            <button className={`${global.button_primary} ${global.button}`}  onClick={(e) => next(e, 3)}> Next </button>
          </div>
        </div>
        {/* step two: image input */}
        <div className={pageNo === 3 ? styles.form : global.hidden}>
          <h1>Upload your photo</h1>
          {/* display string base64 for url as an image and fit image with good resolution */}
           <img src={preview} style={{objectFit:"contain"}} width='50%' height='50%' />
              {/* get url of image when it is selected and/or changed */}
              <input type={"file"} accept="image/*" onChange={async (event)=>{ const file = event.target.files![0]
              if (File){
                setImage(file);
              }else{
                await error(1);
              }
              }}/> 

          {/* submit everything to firebase on this step */}
          <div  className={styles.bottomBtns}>
            <button className={`${global.button_secondary} ${global.button}`}  onClick={(e) => back(e, 2)}> back </button>
            <button className={`${global.button_primary} ${global.button}`}  onClick={(e) => next(e, 0)}> Next </button>
          </div>
        </div>
      </form>
      <Error code={err.code} boolean={err.active} isError={err.error}></Error>

    </div>
  );
};
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/verify/",
  // This must be true.
  handleCodeInApp: true
};

function submitToFireBase() {
  console.log("submitting to firebase");
}

export default Authentication;
