import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase';
import type { CardFields } from '@/types/Card';

export default async function addCardData(docData: CardFields) {
  const docRef = await addDoc(collection(db, 'cards'), docData);

  return docRef.id;
}
