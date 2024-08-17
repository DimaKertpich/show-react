import { Product } from '../../shared/types';

export type DiscountProductsListResultProps = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};

export type DiscountProductsListProps = DiscountProductsListResultProps;
