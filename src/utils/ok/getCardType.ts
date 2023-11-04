import { CardType } from '@/types/CardType'
import getHaveCardIds from './getHaveCardIds';
import getMyCardIds from './getMyCardIds';

const getCardType = async (userId: string, cardId: string): Promise<CardType> => {
  const myCardIds = await getMyCardIds(userId);
  if (myCardIds && myCardIds.findIndex((id) => id === cardId) !== -1) return CardType.My
  const haveCardIds = await getHaveCardIds(userId);
  if (haveCardIds && haveCardIds.findIndex((id) => id === cardId) !== -1) return CardType.Have
  return CardType.None;
}

export default getCardType;