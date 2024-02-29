import { doc, updateDoc, arrayRemove } from 'firebase/firestore';
import { db } from '@/firebase';
import { CARD_TYPE, type CardType } from '@/types/CardType';

export default async function deleteCardIdByCardId(userId: string, cardId: string, cardType: CardType) {
  const userRef = doc(db, 'users', userId);
  const field = cardType === CARD_TYPE.My ? 'myCardIds' : 'haveCardIds';
  await updateDoc(userRef, {
    [field]: arrayRemove(cardId),
  });
}
