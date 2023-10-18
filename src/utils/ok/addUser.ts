import { doc, setDoc } from "firebase/firestore";
import { db } from '@/firebase'

export default async function addUser(userId: string) {
  await setDoc(doc(db, "users", userId), {});
}
