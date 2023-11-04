import getMyCardIdsByUserId from './getMyCardIdsByUserId'
import getCardDetils from './getCardDetils'
import type { CardData } from '@/types/CardData'

export default async function getMyCardDetails(userId: string) {
  const myCardIds = await getMyCardIdsByUserId(userId);

  if (!myCardIds) return null;

  const fetchedDetails: (CardData | undefined)[] = await Promise.all(myCardIds.map(async (id) => {
    const fetchedDetail: CardData | null = await getCardDetils(id);
    if (fetchedDetail) return fetchedDetail;
  }));

  const fetchedCardDetails: CardData[] = fetchedDetails.filter((detail): detail is CardData => detail !== undefined);

  return fetchedCardDetails.length > 0 ? fetchedCardDetails : null;
}