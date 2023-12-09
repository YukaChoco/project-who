import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import type { CardFields } from '@/types/Card';

export default async function getCardFields(cardId: string) {
  const docSnap = await getDoc(doc(db, 'cards', cardId));

  if (docSnap.exists()) {
    const cardFields: CardFields = docSnap.data() as CardFields;
    return cardFields;
  } else {
    return null;
  }
}
