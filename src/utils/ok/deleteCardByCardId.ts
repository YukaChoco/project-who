import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import type { CardType } from '@/types/CardType';
import deleteCardIdByCardId from './deleteCardIdByCardId';

export default async function deleteCardByCardId(userId: string, cardId: string, cardType: CardType) {
  await deleteDoc(doc(db, 'cards', cardId));
  await deleteCardIdByCardId(userId, cardId, cardType);
}
