import { useEffect, useState } from 'react';
import useUser from './useUser';
import getCardDataByCardId from '@/domain/getCardDataByCardId';
import getCardTypeByCardId from '@/domain/getCardTypeByCardId';
import type { CardData } from '@/types/Card';
import { CARD_TYPE, CardType } from '@/types/CardType';

export default function useSingleCard(cardId: string) {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [cardType, setCardType] = useState<CardType>(CARD_TYPE.None);
  const { userId } = useUser();

  useEffect(() => {
    const fetchCardDatas = async () => {
      const fetchedCardData = await getCardDataByCardId(cardId);
      setCardData(fetchedCardData);
      if (userId) {
        const fetchCardType = await getCardTypeByCardId(userId, cardId);
        setCardType(fetchCardType);
      }
    };
    fetchCardDatas();
  }, [cardId, userId]);

  return { cardData, cardType };
}
