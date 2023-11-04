import { CardType } from '@/types/CardType'
import getHaveCardIds from './getHaveCardIds';
import getMyCardIds from './getMyCardIds';

const getCardType = async (userId: string, cardId: string): Promise<CardType> => {
  const myCardIds = await getMyCardIds(userId);
  if (myCardIds?.includes(cardId)) {
    return CardType.My;
  }

  const haveCardIds = await getHaveCardIds(userId);
  if (haveCardIds?.includes(cardId)) {
    return CardType.Have;
  }

  return CardType.None;
}

export default getCardType;