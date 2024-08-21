import { Product } from '../../shared/types';

export type DiscountProductsListResultProps = {
  products: Product[];
  isLoading: boolean;
  loadMore: () => void;
};

export type DiscountProductsListProps = DiscountProductsListResultProps;
