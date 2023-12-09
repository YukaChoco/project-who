import { useEffect, useState } from 'react';
import useUser from './useUser';
import type { CardData } from '@/types/CardData';
import { CardType } from '@/types/CardType';
import getCardDatasByUserId from '@/utils/ok/getCardDatasByUserId';

export default function useCardDataList(cardType: CardType) {
  const [cardDatas, setCardDatas] = useState<CardData[] | null>(null);
  const { userId } = useUser();

  useEffect(() => {
    const fetchCardDatas = async () => {
      if (userId) {
        const fetchedCardDatas = await getCardDatasByUserId(userId, cardType);
        setCardDatas(fetchedCardDatas);
      }
    };
    fetchCardDatas();
  }, [cardType, userId]);

  return cardDatas;
}
