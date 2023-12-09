import { useEffect, useState } from 'react';
import useUser from './useUser';
import type { CardData } from '@/types/CardData';
import { CARD_TYPE, CardType } from '@/types/CardType';
import getCardFields from '@/utils/ok/getCardFields';
import getCardType from '@/utils/ok/getCardType';

export default function useSingleCard(cardId: string) {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [cardType, setCardType] = useState<CardType>(CARD_TYPE.None);
  const { userId } = useUser();

  useEffect(() => {
    const fetchCardDatas = async () => {
      const fetchedCardData = await getCardFields(cardId);
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
