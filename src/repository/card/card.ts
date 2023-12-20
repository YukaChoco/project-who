import { CardFields } from '@/types/Card';
import { CardType } from '@/types/CardType';

export interface ICardRepository {
  findCardByCardID(cardID: string): Promise<CardFields | null>;
  findCardIDsByUserID(userID: string, cardType: CardType): Promise<string[]>;
  addCardData(cardData: CardFields): Promise<string>;
  addCardID(userID: string, cardID: string, cardType: CardType): Promise<void>;
}
