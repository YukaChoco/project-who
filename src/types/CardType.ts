export const CARD_TYPE = {
  My: 'mycard',
  Have: 'card',
  None: 'none',
  Error: 'error',
} as const;

export type CardType = (typeof CARD_TYPE)[keyof typeof CARD_TYPE];
