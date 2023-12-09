import addCardData from '@/repository/addCardData';
import addCardId from '@/repository/addCardId';
import type { CardFields } from '@/types/Card';
import { CardType } from '@/types/CardType';

export default async function createCard(userId: string, cardData: CardFields, cardType: CardType) {
  const newCardId = await addCardData(cardData);
  await addCardId(userId, newCardId, cardType);
}
