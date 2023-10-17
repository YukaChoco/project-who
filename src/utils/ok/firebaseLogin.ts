import { auth } from '@/firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import addUser from './addUser'

export default async function firebaseLogin() {
  const provider = new GoogleAuthProvider();

  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        addUser(result.user.uid)
      }
    }).catch((error) => {
      console.error(error)
    });
}




// import { auth } from '@/firebase'
// import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
// import addUser from './addUser'

// export default async function FirebaseLogin() {
//   const provider = new GoogleAuthProvider();

//   await signInWithPopup(auth, provider)
//     .then().catch((error) => {
//       console.error(error)
//     });

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       addUser(uid);
//     } else {
//     }
//   });
// }



