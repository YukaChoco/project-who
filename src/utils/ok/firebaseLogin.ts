import { auth } from '@/firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

import addUser from './addUser';

export default async function FirebaseLogin() {
  const provider = new GoogleAuthProvider();

  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const user = result.user;
        addUser(user.uid);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
