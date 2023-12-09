import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '@/firebase';
import { CARD_TYPE, CardType } from '@/types/CardType';

export default async function addCardId(userId: string, cardId: string, cardType: CardType) {
  const field = cardType === CARD_TYPE.My ? 'myCardIds' : 'haveCardIds';
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, {
    [field]: arrayUnion(cardId),
  });
  return true;
}
