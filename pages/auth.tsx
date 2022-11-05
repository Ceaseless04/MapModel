// this is the authentication page
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import React, { useEffect } from "react";
import global from "../styles/Global.module.scss";
import styles from "../styles/Auth.module.scss";
import { auth, db } from "../.env/firebase";
import * as firebase from "firebase/compat/app";
import data from "../public/Major_Names.json";
import Error from "../components/error";

import { app, firestore } from '../firebase';
import { collection, addDoc, getDoc, getDocs, query, where } from 'firebase/firestore';
import GooglePlacesAutocomplete, { getLatLng } from 'react-google-places-autocomplete';
const dbInstance = collection(firestore, 'users');
const dbEmailInstance = collection(firestore, 'emails');


const Authentication = () => {
  let [err, setError] = React.useState({ active: false, code: 0 , error: true});
  let [pageNo, change] = React.useState(1);
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
      let emailAddress = email.split("?")[1].split("=")[1]
      // set to local storage and input value
      window.localStorage.setItem("email", emailAddress);
      (document.getElementById("email") as HTMLInputElement).value = emailAddress
      checkEmail(emailAddress,2)
      console.log(emailAddress)
    }
    else{

    }
},[]);
  const getLatLng = async (placeId: string) => {
    try {
      const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyDcjNrNrDamH1BaZ6BtgvWY3ENNx5QXoM4`);
      const obj = await res.json();
      // var obj = JSON.parse(data);
      let lat =  obj.results[0].geometry.location.lat;
      let lng =  obj.results[0].geometry.location.lng; 
      
      addInfo({
        email:  window.localStorage.getItem("email") || getInputVal("email"),
        name: getInputVal("name"),
        major: getInputVal("major"),
        country: getInputVal("country"),
        city: getInputVal("city"),
        picture: "",
        lat: lat,
        lng: lng
      });
      console.log(userInformation)
      return ({lat: lat, lng: lng})
    } catch (err) {
      console.log(err);
    }
  };
  async function next(e: any, n: number) {
    e.preventDefault();
    console.log(n);
    switch (n) {
      case 2:
        const email = getInputVal("email");
        window.localStorage.setItem("email", email)
        //check email then proceed to call below function
        checkEmail(email,n) ;
        break;
      case 3:
      // add if user information is null - use kris function coral
        userInformation.name = getInputVal("name");
        userInformation.major = getInputVal("major");
        userInformation.country = getInputVal("country");
        userInformation.city = getInputVal("city");
        change(n);
        break;
      case 0:
        await getLatLng(location.value.place_id)
        console.log(userInformation);
        addDoc(dbInstance, userInformation).then(async()=>{
          console.log("added")
            await error(3, false)
        })
        window.localStorage.clear()
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
      <form>
        {/* step one: email input */}
        <div className={pageNo == 1 ? styles.form : global.hidden}>
          <h1>add email</h1>

          <input
            type="text"
            placeholder="email"
            name="email"
            id="email"
          ></input>
          <div className={styles.bottomBtns} >
            <button className={`${global.button_primary} ${global.button}`} onClick={(e) => next(e, 2)}> Next </button>
          </div>
        </div>
        {/* step two: image input */}
        <div className={pageNo == 2 ? styles.form : global.hidden}>
          <h1>add information</h1>
          <input type="text" placeholder="name" name="name" id="name"></input>
          <select name="major" id="major">
            {data["MAIN"].map((val)=><option value={val['Major Name']} key={val['Major Name']}>{val["Major Name"]}</option>)}
        </select>
        <p>type in your city of origin below</p>
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
                      color: 'black',
                    }),
                    option: (provided: any) => ({
                      ...provided,
                      color: 'black',
                      height: '60px',
                      width: '39vw',
                    }),
                    singleValue: (provided:any) => ({
                      ...provided,
                      color: 'black',
                      width: '39vw',    
                    }),
                  },
                }}
              />
        </div>
          
          <input type="text" placeholder="city" name="city" id="city" value={location?.label.split(',').slice(0,-1)} readOnly></input>
          <input
            type="text"
            placeholder="country"
            name="country"
            id="country"
            value={location?.label.split(',').slice(-1)} readOnly
          ></input>
          {/* submit everything to firebase on this step */}
          <div  className={styles.bottomBtns}>
            <button className={`${global.button_secondary} ${global.button}`}  onClick={(e) => back(e, 1)}> back </button>
           
            <button className={`${global.button_primary} ${global.button}`}  onClick={(e) => next(e, 3)}> Next </button>
          </div>
        </div>
        {/* step two: image input */}
        <div className={pageNo === 3 ? styles.form : global.hidden}>
          <h1>add image</h1>
          <input type="image" name="image" id="image"></input>
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
