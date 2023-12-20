import { useEffect, useState } from 'react';
import useUser from './useUser';
import { db } from '@/firebase';
import { CardRepository } from '@/repository/card/firestore/firestore';
import type { CardData } from '@/types/Card';
import { CardType } from '@/types/CardType';

import { GetCardDatasByUserIDUseCase } from '@/usecase/getCardDatasByUserId';

export default function useCardDataList(cardType: CardType) {
  const [cardDatas, setCardDatas] = useState<CardData[] | null>(null);
  const { userId } = useUser();

  const cardRepository = new CardRepository(db);
  const getCardDatasByUserIDUseCase = new GetCardDatasByUserIDUseCase(cardRepository);

  useEffect(() => {
    const fetchCardDatas = async () => {
      if (userId) {
        const fetchedCardDatas = await getCardDatasByUserIDUseCase.execute(userId, cardType);
        setCardDatas(fetchedCardDatas);
      }
    };
    fetchCardDatas();
  }, [cardType, userId]);

  return cardDatas;
}
