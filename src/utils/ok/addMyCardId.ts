import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from '@/firebase'
import { onAuthStateChanged } from "firebase/auth";

export default async function addMyCardId(myCardId: string) {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const docRef = doc(db, "users", uid);
      updateDoc(docRef, {
        my_card_ids: arrayUnion(myCardId)
      });
      return true;
    } else {
      return false;
    }
  })
}
