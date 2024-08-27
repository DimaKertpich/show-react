export type Option = {
  label?: string;
  value: string;
  icon?: string;
};

export type Size = {
  size: string;
  stockQuantity: boolean;
};

export type Product = {
  id: number;
  productName: string;
  description: string[];
  price: number;
  discount: number;
  category: string;
  images: string[];
  sizes: Size[];
};
