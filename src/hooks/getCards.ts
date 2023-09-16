import { doc, getDoc, getFirestore } from "firebase/firestore";
import { db } from '../firebase'

export default async function getCards() {
  const docRef = doc(db, "user","hOvlmmbmHDuD92fk8ZZB");
  const docSnap = await getDoc(docRef);
  console.log(docSnap);
}