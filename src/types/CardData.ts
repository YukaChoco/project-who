export interface CardData {
  id: string;
  name: string;
  organization: string;
  x: string;
  instagram: string;
  others: string;
  textColor: string;
  bgColor: string;
}

export interface MakeMyCardData extends Omit<CardData, 'id'> { }

export interface MakeOthersCardData extends Omit<CardData, 'id' | 'textColor' | 'bgColor'> { }
