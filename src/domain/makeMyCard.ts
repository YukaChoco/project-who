import createCard from './createCard';
import type { MakeMyCardData } from '@/types/CardData';
import { CARD_TYPE } from '@/types/CardType';

export default async function makeMyCard(userId: string, docData: MakeMyCardData) {
  const cardData = {
    ...docData,
    authorId: userId,
    protected: false,
  };
  await createCard(userId, cardData, CARD_TYPE.My);
}
