import getMyCardIdsByUserId from './getMyCardIdsByUserId';
import getCardDetails from './getCardDetails';
import type { CardData } from '@/types/CardData';

export default async function getMyCardDetailsByUserId(userId: string) {
  const myCardIds = await getMyCardIdsByUserId(userId);

  if (!myCardIds) return null;

  const fetchedDetails: (CardData | undefined)[] = await Promise.all(
    myCardIds.map(async (id) => {
      const fetchedDetail: CardData | null = await getCardDetails(id);
      if (fetchedDetail) return fetchedDetail;
    }),
  );

  const fetchedCardDetails: CardData[] = fetchedDetails.filter((detail): detail is CardData => detail !== undefined);

  return fetchedCardDetails[0];
}
