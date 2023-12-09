import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase';
import type { GetCardData } from '@/types/CardData';

export default async function addCardData(docData: GetCardData) {
  const docRef = await addDoc(collection(db, 'cards'), docData);

  return docRef.id;
}
