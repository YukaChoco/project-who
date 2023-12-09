import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '@/firebase';
import { CARD_TYPE, CardType } from '@/types/CardType';

export default async function addCardId(userId: string, cardId: string, cardType: CardType) {
  const docRef = doc(db, 'users', userId);
  if (cardType === CARD_TYPE.My) {
    updateDoc(docRef, {
      myCardIds: arrayUnion(cardId),
    });
  } else if (cardType === CARD_TYPE.Have) {
    updateDoc(docRef, {
      haveCardIds: arrayUnion(cardId),
    });
  }
  return true;
}
