import { db } from '@/firebase';
import type { GetCardData } from '@/types/CardData';
import { doc, getDoc } from 'firebase/firestore';

export default async function getCardDetils(cardId: string) {
  const docSnap = await getDoc(doc(db, 'cards', cardId));

  if (docSnap.exists()) {
    const cardData: GetCardData = docSnap.data() as GetCardData;
    return { id: cardId, ...cardData };
  } else {
    return null;
  }
}
