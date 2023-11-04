import getHaveCardIds from "./getHaveCardIds";
import getMyCardIds from "./getMyCardIds";

export default async function getCardType(userId: string, cardId: string) {
  const myCardIds = await getMyCardIds(userId);
  if (myCardIds && myCardIds.findIndex((id) => id === cardId) !== -1) return 'my'
  const haveCardIds = await getHaveCardIds(userId);
  if (haveCardIds && haveCardIds.findIndex((id) => id === cardId) !== -1) return 'have'
  return 'undefined';
}
