import addCardData from '@/repository/addCardData';
import addCardId from '@/repository/addCardId';
import type { GetCardData } from '@/types/CardData';
import { CardType } from '@/types/CardType';

export default async function createCard(userId: string, cardData: GetCardData, cardType: CardType) {
  const newCardId = await addCardData(cardData);
  await addCardId(userId, newCardId, cardType);
}
