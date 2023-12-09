import { CARD_TYPE, CardType } from '@/types/CardType';
import addCardData from './addCardData';
import addCardId from './addCardId';
import type { GetCardData } from '@/types/CardData';

export default async function createCard(userId: string, cardData: GetCardData, cardType: CardType) {
  const newCardId = await addCardData(cardData);
  await addCardId(userId, newCardId, cardType);
}
