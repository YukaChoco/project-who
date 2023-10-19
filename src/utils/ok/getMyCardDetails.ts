import getMyCardIds from './getMyCardIds'
import getCardData from './getCardData'
import type { CardData } from '@/types/CardData'

export default async function getMyCardDetails(userId: string) {
  const myCardIds = await getMyCardIds(userId);

  if (!myCardIds) return [];

  const fetchedDetails = await Promise.all(myCardIds.map(async (id) => {
    const fetchedDetail = await getCardData(id);
    if (fetchedDetail) return fetchedDetail;
  }));

  const fetchedCardDetails: CardData[] = fetchedDetails.filter((detail): detail is CardData => detail !== undefined);

  return fetchedCardDetails;
}