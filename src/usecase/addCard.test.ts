import { CardRepository } from './../repository/card/firestore/firestore';
import { CardData } from './../types/Card';
import { CARD_TYPE, CardType } from './../types/CardType';
import { addCardUseCase } from './addCard';

jest.mock('./../repository/card/firestore/firestore');

describe('addCardUseCase', () => {
  let useCase: addCardUseCase;
  let mockCardRepository: jest.Mocked<CardRepository>;

  const mockFirestore = {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    get: jest.fn(),
    // Firestore で使用する他のメソッドをここに追加
  };

  beforeEach(() => {
    mockCardRepository = new CardRepository(mockFirestore as any) as jest.Mocked<CardRepository>;
    useCase = new addCardUseCase(mockCardRepository);
  });

  it('should add card data and ID for valid input', async () => {
    // Arrange
    const userID = 'user123';
    const cardData: CardData = {
      authorId: userID,
      name: 'card name',
      organization: 'organization name',
      x: 'x',
      instagram: 'instagram',
      textColor: '#000000',
      bgColor: '#ffffff',
      protected: false,
    };
    const cardType: CardType = CARD_TYPE.My;

    mockCardRepository.addCardData.mockResolvedValue('card123');
    mockCardRepository.addCardID.mockResolvedValue(undefined);

    // Act
    await useCase.execute(userID, cardData, cardType);

    // Assert
    expect(mockCardRepository.addCardData).toHaveBeenCalledWith(cardData);
    expect(mockCardRepository.addCardID).toHaveBeenCalledWith(userID, 'card123', cardType);
  });
});
