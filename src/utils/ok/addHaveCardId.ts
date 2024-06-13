import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '@/firebase';

export default async function addHaveCardId(userId: string, haveCardId: string) {
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, {
    haveCardIds: arrayUnion(haveCardId),
  })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
      return false;
    });

  return true;
}
