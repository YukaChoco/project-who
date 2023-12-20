import { CardRepository } from '@/repository/card/firestore/firestore';
import { CardData } from '@/types/Card';
import { CardType } from '@/types/CardType';

export class addCardUseCase {
  private readonly cardRepository: CardRepository;

  constructor(cardRepository: CardRepository) {
    this.cardRepository = cardRepository;
  }

  async execute(userID: string, cardData: CardData, cardType: CardType) {
    if (!userID) {
      return new Error('userID is not defined');
    }
    if (!cardData) {
      return new Error('cardData is not defined');
    }
    if (!cardType) {
      return new Error('cardType is not defined');
    }

    try {
      const cardID = await this.cardRepository.addCardData(cardData);
      await this.cardRepository.addCardID(userID, cardID, cardType);
      return;
    } catch (e) {
      console.log(e);
      return;
    }
  }
}
