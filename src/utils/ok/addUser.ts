import { doc, setDoc } from "firebase/firestore";
import { db } from '@/firebase'

export default async function addUser(userId: string) {
  const userRef = doc(db, "users", userId);
  await setDoc(userRef, { capital: true }, { merge: true });
}
