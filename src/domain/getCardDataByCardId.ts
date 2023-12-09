import getCardFieldsByCardId from '@/repository/getCardFieldsByCardId';
import type { CardData } from '@/types/Card';

export default async function getCardDataByCardId(cardId: string) {
  const cardFields = await getCardFieldsByCardId(cardId);

  if (cardFields) {
    const cardData: CardData = { id: cardId, ...cardFields };
    return cardData;
  } else {
    return null;
  }
}
