export interface CardFields {
  authorId: string;
  name: string;
  organization: string;
  x: string;
  instagram: string;
  textColor: string;
  bgColor: string;
  protected: boolean;
}

export interface CardData extends CardFields {
  id: string;
}

export interface CreateMyCardData extends Pick<CardFields, 'name' | 'organization' | 'x' | 'instagram' | 'textColor' | 'bgColor'> {}
export interface CreateHaveCardData extends Pick<CardFields, 'name' | 'organization' | 'x' | 'instagram'> {}
