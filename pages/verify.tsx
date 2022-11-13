import type { NextPage } from 'next'
import Link from 'next/link';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { auth } from "../.env/firebase";
import styles  from "../styles/Verify.module.scss"
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const dbInstance = collection(firestore, 'emails');

const verify: NextPage = () => {
    let [email, change] = React.useState(null as any);

    useEffect(()=>{
        if (typeof window !== "undefined") {
            if (auth.isSignInWithEmailLink(window.location.href)) {
                change(window.localStorage.getItem("email"));
                if (!email) {
                email = window.localStorage.getItem("email");
                }
                auth
                .signInWithEmailLink(email || "", window.location.href)
                .then((result) => {
                    // Clear email from storage.
                    window.localStorage.removeItem("email");
                    window.localStorage.setItem("email",email||"")
                    addDoc(dbInstance, {email: email}).then(()=>{
                        console.log("added")
                    })
                    router.replace('/auth?email='+email.replace("@","%40"))
                })
                .catch((error) => {
                    // Some error occurred, you can inspect the code: error.code
                    // Common errors could be invalid email and invalid or expired OTPs.
                    console.log(error)
                });
            }}
    },[])
    
    const router = useRouter()

    return(
        <div className={styles.parent}>
            <div>
                redirecting...
                if page doesn't redirect click here 
                <br></br>
               {/* <Link href="/auth/"> */}
                <button onClick={() => router.replace('/auth?email='+email.replace("@","%40"))}>
                    redirect me
                </button> 
              {/* </Link> */}
            </div>
        </div>
    );
}
export default verify