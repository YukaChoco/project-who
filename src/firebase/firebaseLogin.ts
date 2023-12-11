import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/firebase';
import addUser from '@/repository/addUser';

export default async function FirebaseLogin() {
  const provider = new GoogleAuthProvider();

  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // console.log(result.user.displayName);
      if (credential) {
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }
    })
    .catch(() => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  //現在ログインしているユーザーを取得する
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      addUser(uid);
    } else {
      // User is signed out
      // ...
    }
  });
}
