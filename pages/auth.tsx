// this is the authentication page
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import global from "../styles/Global.module.scss";
const Authentication = () => {
  return (
    <div className={global.font}>
      <button onClick={submitEmail}>Submit</button>
      {/* step one: email input */}
      <div>
        <h1>add email</h1>
        <form>
          <input type="text"></input>
          <button type="submit"></button>
        </form>
      </div>
      {/* step two: image input */}
      <div>
        <h1>add information</h1>
        <form>
        <input type="text" placeholder="name"></input> 
        <input type="text" placeholder="Major"></input>
        <input type="text" placeholder="country"></input>
         

          {/* submit everything to firebase on this step */}
          <button type="submit"></button>
        </form>
      </div>
       {/* step two: image input */}
       <div>
        <h1>add image</h1>
        <form>
          <input type="image"></input>
          {/* submit everything to firebase on this step */}
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/",
  // This must be true.
  handleCodeInApp: true,
};
function submitEmail() {
  let email = "kristian120304@gmail.com";

  const auth = getAuth();
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      console.log("hello", email);
      window.localStorage.setItem("emailForSignIn", email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
}

export default Authentication;
