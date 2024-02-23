import { getAuth, signOut } from 'firebase/auth';

export default async function FirebaseSignOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });
}
