export const FORM_MODE = {
  Texts: '入力',
  Colors: 'デザイン',
  Complete: '完了',
} as const;

export type FormMode = (typeof FORM_MODE)[keyof typeof FORM_MODE];
