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

export type UserFormRegistration = {
  username: string;
  email: string;
  password: string;
};

export type UserFormLogin = {
  email: string;
  password: string;
};

export type RegistrationResponse = {
  id: number;
  username: string;
  email: string;
};
