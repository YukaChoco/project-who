import createCard from './createCard';
import type { CreateHaveCardData } from '@/types/Card';
import { CARD_TYPE } from '@/types/CardType';

export default async function makeHaveCard(userId: string, docData: CreateHaveCardData) {
  const cardData = {
    ...docData,
    authorId: userId,
    textColor: '#000',
    bgColor: '#FFF',
    protected: true,
  };
  await createCard(userId, cardData, CARD_TYPE.Have);
}
