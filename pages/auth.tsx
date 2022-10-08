// this is the authentication page
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
const Authentication=()=>{
    return(
        <div>
            <button onClick={submitEmail}>Submit</button>
            {/* step one: email input */}
            <div>
                <form>
                    <input></input>
                    <button type="submit"></button>
                </form>
            </div>
           {/* step two: image input */}
           <div>
                <form>
                    <input></input>
                    {/* submit everything to firebase on this step */}
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    )

}
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/',
    // This must be true.
    handleCodeInApp: true,
    
  };
  function submitEmail() {
    let email = "kristian120304@gmail.com"

  const auth = getAuth();
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      console.log("hello", email)
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  }

  
export default Authentication