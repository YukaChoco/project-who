import addCardData from './addCardData';
import addMyCardId from './addMyCardId';
import type { MakeMyCardData } from '@/types/CardData';

export default async function makeMyCard(userId: string, docData: MakeMyCardData) {
  const cardData = {
    ...docData,
    authorId: userId,
    protected: false,
  };
  const newCardId = await addCardData(cardData);
  addMyCardId(userId, newCardId);
}
