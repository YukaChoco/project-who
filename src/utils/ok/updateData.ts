import { db } from '@/firebase'; // Make sure you are importing the correct db instance
import type { MakeMyCardData, MakeOthersCardData } from '@/types/CardData';
import { doc, updateDoc } from 'firebase/firestore';

export default async function updateData(cardId: string, docData: MakeMyCardData | MakeOthersCardData) {
  const docRef = doc(db, 'cards', cardId);
  await updateDoc(docRef, docData);
  return;
}
