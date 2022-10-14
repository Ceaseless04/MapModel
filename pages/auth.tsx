// this is the authentication page
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import React from "react";
import global from "../styles/Global.module.scss";
import styles from "../styles/Auth.module.scss";
import { auth, db } from "../.env/firebase";
import * as firebase from "firebase/compat/app";
import data from "../public/Major_Names.json";

const Authentication = () => {
  let [err, setError] = React.useState({ active: false, code: 0 });
  let [pageNo, change] = React.useState(1);
  let [userInformation, addInfo] = React.useState({
    email: "",
    name: "",
    major: "",
    country: "",
    city: "",
    picture: ""
  });

  function checkEmail(email: string,n:number) {
    // if email tests pass submit it to firebase
    // return submitEmail(email,n);
    change(n)
  }
  async function error(code: number) {
    setError({ active: !err.active, code: code });
    if (!err.active) {
      await new Promise((f) => setTimeout(f, 3000));
      // restore defaults
      setError({ active: err.active, code: code });
    }
  }
  function submitEmail(email: string,n:number): boolean {
    // const auth = getAuth(app);
    auth
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        userInformation.email = email;
        window.localStorage.setItem("emailForSignIn", email);
        change(n)
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
  
  function next(e: any, n: number) {
    e.preventDefault();
    console.log(n);
    switch (n) {
      case 2:
        const email = getInputVal("email");
        //check email then proceed to call below function
        checkEmail(email,n) ;
        break;
      case 3:
        userInformation.name = getInputVal("name");
        userInformation.major = getInputVal("major");
        userInformation.country = getInputVal("country");
        userInformation.city = getInputVal("city");
        change(n);
        break;
      case 0:
        addInfo({
          email:  window.localStorage.getItem("email") || getInputVal("email"),
          name: getInputVal("name"),
          major: getInputVal("major"),
          country: getInputVal("country"),
          city: getInputVal("city"),
          picture: ""
        });
        console.log(userInformation);

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
            {data["MAIN"].map((val)=><option value={val['Major Name']}>{val["Major Name"]}</option>)}
        </select>
          <input type="text" placeholder="city" name="city" id="city"></input>
          <input
            type="text"
            placeholder="country"
            name="country"
            id="country"
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
          <input type="image" name="name" id="name"></input>
          {/* submit everything to firebase on this step */}
          <div  className={styles.bottomBtns}>
            <button className={`${global.button_secondary} ${global.button}`}  onClick={(e) => back(e, 2)}> back </button>
            <button className={`${global.button_primary} ${global.button}`}  onClick={(e) => next(e, 0)}> Next </button>
          </div>
        </div>
      </form>
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
