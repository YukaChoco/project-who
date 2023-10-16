import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from '@/firebase'
import { onAuthStateChanged } from "firebase/auth";

export default async function addHaveCardId(haveCardId: string) {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const docRef = doc(db, "users", uid);
      updateDoc(docRef, {
        have_card_ids: arrayUnion(haveCardId)
      });
      return true;
    } else {
      return false;
    }
  })
}
