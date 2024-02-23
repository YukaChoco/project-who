export interface CardData {
  id: string;
  authorId: string;
  name: string;
  organization: string;
  x: string;
  instagram: string;
  textColor: string;
  bgColor: string;
  protected: boolean;
}

export interface MakeMyCardData extends Pick<CardData, 'name' | 'organization' | 'x' | 'instagram' | 'textColor' | 'bgColor'> {}
export interface EditMyCardData extends Pick<CardData, 'name' | 'organization' | 'x' | 'instagram'> {}
export interface MakeOthersCardData extends Pick<CardData, 'name' | 'organization' | 'x' | 'instagram'> {}

export interface GetCardData extends Omit<CardData, 'id'> {}
