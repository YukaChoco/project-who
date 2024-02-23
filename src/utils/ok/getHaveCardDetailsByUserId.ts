import getHaveCardIdsByUserId from './getHaveCardIdsByUserId';
import getCardDetils from './getCardDetails';
import type { CardData } from '@/types/CardData';

export default async function getHaveCardDetailsByUserId(userId: string) {
  const haveCardIds = await getHaveCardIdsByUserId(userId);

  if (!haveCardIds) return null;

  const fetchedDetails: (CardData | undefined)[] = await Promise.all(
    haveCardIds.map(async (id) => {
      const fetchedDetail: CardData | null = await getCardDetils(id);
      if (fetchedDetail) return fetchedDetail;
    }),
  );

  const fetchedCardDetails: CardData[] = fetchedDetails.filter((detail): detail is CardData => detail !== undefined);

  return fetchedCardDetails.length > 0 ? fetchedCardDetails : null;
}
