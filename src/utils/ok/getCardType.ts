import { CardType } from '@/types/CardType';
import getHaveCardIdsByUserId from './getHaveCardIdsByUserId';
import getMyCardIdsByUserId from './getMyCardIdsByUserId';

const getCardType = async (userId: string, cardId: string): Promise<CardType> => {
  const myCardIds = await getMyCardIdsByUserId(userId);
  if (myCardIds?.includes(cardId)) {
    return CardType.My;
  }

  const haveCardIds = await getHaveCardIdsByUserId(userId);
  if (haveCardIds?.includes(cardId)) {
    return CardType.Have;
  }

  return CardType.None;
};

export default getCardType;
