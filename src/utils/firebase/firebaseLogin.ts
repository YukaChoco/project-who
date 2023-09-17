import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '@/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import addUserData from './addUserData'


export default async function firebaseLogin() {
  const docData = {
    id: "test_add_id5",
    fileld:{
      name: "test_add_name",
    }
  };
  const provider = new GoogleAuthProvider();
  
  addUserData(docData);
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(result.user.displayName)
      if(credential){
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}



