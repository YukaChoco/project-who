import getCardData from '@/domain/getCardData';
import getCardIdsByUserId from '@/repository/getCardIdsByUserId';
import type { CardData } from '@/types/Card';
import type { CardType } from '@/types/CardType';

export default async function getCardDatasByUserId(userId: string, cardType: CardType) {
  const cardIds = await getCardIdsByUserId(userId, cardType);

  if (!cardIds) return null;

  const fetchedCardDatas: (CardData | undefined)[] = await Promise.all(
    cardIds.map(async (id) => {
      const fetchedCardData: CardData | null = await getCardData(id);
      if (fetchedCardData) return fetchedCardData;
    }),
  );

  const fetchedCardDetails: CardData[] = fetchedCardDatas.filter((data): data is CardData => data !== undefined);

  return fetchedCardDetails.length > 0 ? fetchedCardDetails : null;
}
