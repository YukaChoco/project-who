import { CardRepository } from '@/repository/card/firestore/firestore';

export class GetCardDataByCardIDUseCase {
  private readonly cardRepository: CardRepository;

  constructor(cardRepository: CardRepository) {
    this.cardRepository = cardRepository;
  }

  async execute(cardID: string) {
    try {
      const cardData = await this.cardRepository.findCardByCardID(cardID);
      if (!cardData) {
        return null;
      }
      return cardData;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
