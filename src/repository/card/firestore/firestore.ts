import { Firestore } from 'firebase/firestore';
import { ICardRepository } from '../card';
import { CardData } from '@/types/Card';
import { CardType } from '@/types/CardType';

export class CardRepository implements ICardRepository {
  constructor(private db: Firestore) {}

  async findCardByCardID(cardID: string): Promise<CardData | null> {
    // データソースからユーザーを検索
    return null;
  }

  async findCardIDsByUserID(userID: string, cardType: CardType): Promise<string[]> {
    // データソースからユーザーを検索
    return [];
  }

  async addCardData(cardData: CardData): Promise<string> {
    // データソースにユーザーを追加
    return '';
  }

  async addCardID(userID: string, cardID: string, cardType: CardType): Promise<void> {
    // データソースにユーザーを追加
  }
}
