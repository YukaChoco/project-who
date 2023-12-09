import getCardFields from '@/repository/getCardFields';
import type { CardData } from '@/types/Card';

export default async function getCardDataByCardId(cardId: string) {
  const cardFields = await getCardFields(cardId);

  if (cardFields) {
    const cardData: CardData = { id: cardId, ...cardFields };
    return cardData;
  } else {
    return null;
  }
}
