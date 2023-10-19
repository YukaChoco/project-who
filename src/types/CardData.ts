export interface CardData {
  id: string;
  authorId: string;
  name: string;
  organization: string;
  x: string;
  instagram: string;
  others: string;
  textColor: string;
  bgColor: string;
}

export interface MakeMyCardData extends Omit<CardData, 'id' | 'authorId'> { }
export interface MakeOthersCardData extends Omit<CardData, 'id' | 'authorId' | 'textColor' | 'bgColor'> { }

export interface GetCardData extends Omit<CardData, 'id'> { }
