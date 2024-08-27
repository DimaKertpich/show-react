export type Principle = {
  textFirst?: string;
  textSecond?: string;
  textThird?: string;
  textFourth?: string;
};

export type AboutUsItem = {
  aboutUsTitle: string;
  description?: string;
  ourPrinciples?: Principle[];
};
