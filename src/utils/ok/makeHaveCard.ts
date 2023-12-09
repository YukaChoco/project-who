import { CARD_TYPE } from '@/types/CardType';
import addCardData from './addCardData';
import addCardId from './addCardId';
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
  addCardId(userId, newCardId, CARD_TYPE.Have);
}
