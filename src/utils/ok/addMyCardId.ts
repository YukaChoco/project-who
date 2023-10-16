import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from '@/firebase'

export default async function addMyCardId(userId: string, myCardId: string) {

  const docRef = doc(db, "users", userId);
  updateDoc(docRef, {
    my_card_ids: arrayUnion(myCardId)
  });
  return;
}
