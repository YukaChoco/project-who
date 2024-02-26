import { doc, addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase';
import type { GetCardData } from '@/types/CardData';

export default async function deleteCardId(userId: string, cardId: string) {
  // const docRef = await addDoc(collection(db, 'cards'), docData);
  // return docRef.id;
}
