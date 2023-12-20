// GetCardDataByCardIDUseCaseのテスト

import { CardRepository } from './../repository/card/firestore/firestore';
import { GetCardDataByCardIDUseCase } from './getCardDataByCardId';

jest.mock('./../repository/card/firestore/firestore');

describe('GetCardDataByCardIDUseCase', () => {
  let useCase: GetCardDataByCardIDUseCase;
  let mockCardRepository: jest.Mocked<CardRepository>;

  const mockFirestore = {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    get: jest.fn(),
    // Firestore で使用する他のメソッドをここに追加
  };

  beforeEach(() => {
    mockCardRepository = new CardRepository(mockFirestore as any) as jest.Mocked<CardRepository>;
    useCase = new GetCardDataByCardIDUseCase(mockCardRepository);
  });

  it('should return card data for valid input', async () => {
    mockCardRepository.findCardByCardID.mockResolvedValue({
      authorId: 'user123',
      name: 'card name',
      organization: 'organization name',
      x: 'x',
      instagram: 'instagram',
      textColor: '#000000',
      bgColor: '#ffffff',
      protected: false,
    });

    const cardData = useCase.execute('card123');
    expect(cardData).resolves.toEqual({
      authorId: 'user123',
      name: 'card name',
      organization: 'organization name',
      x: 'x',
      instagram: 'instagram',
      textColor: '#000000',
      bgColor: '#ffffff',
      protected: false,
    });
  });
});
