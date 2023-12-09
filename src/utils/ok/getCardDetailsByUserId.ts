import type { CardData } from '@/types/CardData';
import type { CardType } from '@/types/CardType';
import getCardDetils from './getCardDetils';
import getCardIdsByUserId from './getCardIdsByUserId';

export default async function getCardDetailsByUserId(userId: string, cardType: CardType) {
  const cardIds = await getCardIdsByUserId(userId, cardType);

  if (!cardIds) return null;

  const fetchedDetails: (CardData | undefined)[] = await Promise.all(
    cardIds.map(async (id) => {
      const fetchedDetail: CardData | null = await getCardDetils(id);
      if (fetchedDetail) return fetchedDetail;
    }),
  );

  const fetchedCardDetails: CardData[] = fetchedDetails.filter((detail): detail is CardData => detail !== undefined);

  return fetchedCardDetails.length > 0 ? fetchedCardDetails : null;
}
