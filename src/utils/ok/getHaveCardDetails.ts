import getHaveCardIds from './getHaveCardIds'
import getCardData from './getCardData'
import type { CardData } from '@/types/CardData'

export default async function getHaveCardDetails(userId: string) {
  const haveCardIds = await getHaveCardIds(userId);

  const fetchedDetails = await Promise.all(haveCardIds.map(async (id) => {
    const fetchedDetail = await getCardData(id);
    if (fetchedDetail) return fetchedDetail;
  }));

  const fetchedCardDetails: CardData[] = fetchedDetails.filter((detail): detail is CardData => detail !== undefined);

  return fetchedCardDetails;
}