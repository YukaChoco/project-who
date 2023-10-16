import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from '@/firebase'

export default async function addHaveCardId(userId: string, haveCardId: string) {

  const docRef = doc(db, "users", userId);
  updateDoc(docRef, {
    have_card_ids: arrayUnion(haveCardId)
  });
  return true;
}
