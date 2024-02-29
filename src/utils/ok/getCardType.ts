import { CardType, CARD_TYPE } from '@/types/CardType';
import getHaveCardIdsByUserId from './getHaveCardIdsByUserId';
import getMyCardIdsByUserId from './getMyCardIdsByUserId';

const getCardType = async (userId: string, cardId: string): Promise<CardType> => {
  const myCardIds = await getMyCardIdsByUserId(userId);
  if (myCardIds?.includes(cardId)) {
    return CARD_TYPE.My;
  }

  const haveCardIds = await getHaveCardIdsByUserId(userId);
  if (haveCardIds?.includes(cardId)) {
    return CARD_TYPE.Have;
  }

  return CARD_TYPE.None;
};

export default getCardType;
