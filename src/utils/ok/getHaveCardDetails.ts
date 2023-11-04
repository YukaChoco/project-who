import getHaveCardIdsByUserId from './getHaveCardIdsByUserId'
import getCardDetils from './getCardDetils'
import type { CardData } from '@/types/CardData'

export default async function getHaveCardDetails(userId: string) {
  const haveCardIds = await getHaveCardIdsByUserId(userId);

  if (!haveCardIds) return [];

  const fetchedDetails: (CardData | undefined)[] = await Promise.all(
    haveCardIds.map(async (id) => {
      const fetchedDetail: CardData | null = await getCardDetils(id);
      if (fetchedDetail) return fetchedDetail;
    })
  );

  const fetchedCardDetails: CardData[] = fetchedDetails.filter((detail): detail is CardData => detail !== undefined);

  return fetchedCardDetails;
}