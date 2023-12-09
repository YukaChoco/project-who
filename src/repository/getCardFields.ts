import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import type { GetCardData } from '@/types/CardData';

export default async function getCardFields(cardId: string) {
  const docSnap = await getDoc(doc(db, 'cards', cardId));

  if (docSnap.exists()) {
    const cardFields: GetCardData = docSnap.data() as GetCardData;
    return { id: cardId, ...cardFields };
  } else {
    return null;
  }
}
