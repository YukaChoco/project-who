import { useEffect, useState } from 'react';
import useUser from './useUser';
import getCardData from '@/domain/getCardData';
import getCardType from '@/domain/getCardType';
import type { CardData } from '@/types/Card';
import { CARD_TYPE, CardType } from '@/types/CardType';

export default function useSingleCard(cardId: string) {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [cardType, setCardType] = useState<CardType>(CARD_TYPE.None);
  const { userId } = useUser();

  useEffect(() => {
    const fetchCardDatas = async () => {
      const fetchedCardData = await getCardData(cardId);
      setCardData(fetchedCardData);
      if (userId) {
        const fetchCardType = await getCardType(userId, cardId);
        setCardType(fetchCardType);
      }
    };
    fetchCardDatas();
  }, [cardId, userId]);

  return { cardData, cardType };
}
