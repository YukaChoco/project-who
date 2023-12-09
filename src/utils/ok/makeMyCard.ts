import { CARD_TYPE } from '@/types/CardType';
import addCardData from './addCardData';
import addCardId from './addCardId';
import type { MakeMyCardData } from '@/types/CardData';

export default async function makeMyCard(userId: string, docData: MakeMyCardData) {
  const cardData = {
    ...docData,
    authorId: userId,
    protected: false,
  };
  const newCardId = await addCardData(cardData);
  addCardId(userId, newCardId, CARD_TYPE.My);
}
