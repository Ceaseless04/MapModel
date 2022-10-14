import type { NextPage } from 'next'
import Link from 'next/link';

import { auth, db } from "../.env/firebase";

const verify: NextPage = () => {
    if (typeof window !== "undefined") {
    if (auth.isSignInWithEmailLink(window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        var email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
        }
        // The client SDK will parse the code from the link for you.
        auth
        .signInWithEmailLink(email || "", window.location.href)
        .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem("emailForSignIn");
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
            console.log(email)
            console.log(result.user)
            window.localStorage.setItem("email",email||"")
            console.log("process complete")
        })
        .catch((error) => {
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
            console.log(error)
        });
    }}
    
    return(
        <div>
            <div>
                redirecting
                if page doesn't redirect click here 
                <Link href="/auth/">redirect me</Link>
            </div>
           
        </div>
    );
}
export default verify