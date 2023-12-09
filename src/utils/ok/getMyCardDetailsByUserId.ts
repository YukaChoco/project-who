import getCardIdsByUserId from './getCardIdsByUserId';
import getCardDetils from './getCardDetils';
import type { CardData } from '@/types/CardData';
import { CARD_TYPE } from '@/types/CardType';

export default async function getMyCardDetailsByUserId(userId: string) {
  const myCardIds = await getCardIdsByUserId(userId, CARD_TYPE.My);

  if (!myCardIds) return null;

  const fetchedDetails: (CardData | undefined)[] = await Promise.all(
    myCardIds.map(async (id) => {
      const fetchedDetail: CardData | null = await getCardDetils(id);
      if (fetchedDetail) return fetchedDetail;
    }),
  );

  const fetchedCardDetails: CardData[] = fetchedDetails.filter((detail): detail is CardData => detail !== undefined);

  return fetchedCardDetails.length > 0 ? fetchedCardDetails : null;
}
