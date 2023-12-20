import { CardRepository } from '@/repository/card/firestore/firestore';
import { CardData } from '@/types/Card';
import { CardType } from '@/types/CardType';

export class GetCardDatasByUserIDUseCase {
  private readonly cardRepository: CardRepository;

  constructor(cardRepository: CardRepository) {
    this.cardRepository = cardRepository;
  }

  public async execute(userID: string, cardType: CardType) {
    try {
      const cardIds = await this.cardRepository.findCardIDsByUserID(userID, cardType);

      if (cardIds.length === 0) {
        return null;
      }

      const fetchedCardDetails = await Promise.all(cardIds.map((id) => this.cardRepository.findCardByCardID(id)));

      const validCardDetails: CardData[] = fetchedCardDetails.filter((card) => card !== null) as CardData[];

      if (validCardDetails.length === 0) {
        return null;
      }

      return validCardDetails;
    } catch (error) {
      console.error('An error occurred while executing:', error);
      // または、エラーに基づいて適切なエラーレスポンスを返す
      return null; // 例として、nullを返しています
    }
  }
}
