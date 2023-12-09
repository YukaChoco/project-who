import getCardIdsByUserId from '@/repository/getCardIdsByUserId';
import { CardType, CARD_TYPE } from '@/types/CardType';

const getCardTypeByCardId = async (userId: string, cardId: string): Promise<CardType> => {
  const myCardIds = await getCardIdsByUserId(userId, CARD_TYPE.My);
  if (myCardIds?.includes(cardId)) {
    return CARD_TYPE.My;
  }

  const haveCardIds = await getCardIdsByUserId(userId, CARD_TYPE.Have);
  if (haveCardIds?.includes(cardId)) {
    return CARD_TYPE.Have;
  }

  return CARD_TYPE.None;
};

export default getCardTypeByCardId;
