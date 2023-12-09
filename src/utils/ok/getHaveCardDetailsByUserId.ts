import getCardIdsByUserId from './getCardIdsByUserId';
import getCardDetils from './getCardDetils';
import type { CardData } from '@/types/CardData';
import { CARD_TYPE } from '@/types/CardType';

export default async function getHaveCardDetailsByUserId(userId: string) {
  const haveCardIds = await getCardIdsByUserId(userId, CARD_TYPE.Have);

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
