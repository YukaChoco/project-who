import addCardData from './addCardData';
import addHaveCardId from './addHaveCardId';
import type { MakeOthersCardData } from '@/types/CardData';

export default async function makeHaveCard(userId: string, docData: MakeOthersCardData) {
  const cardData = {
    ...docData,
    authorId: userId,
    textColor: '#000',
    bgColor: '#FFF',
    protected: true,
  };

  const newCardId = await addCardData(cardData);
  await addHaveCardId(userId, newCardId);

  return newCardId;
}
