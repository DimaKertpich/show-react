import { Product } from '../../shared/types';

export type ForHimProductsListResultProps = {
  products: Product[];
  isLoading: boolean;
  loadMore: () => void;
  pageTitle: string;
};

export type ForHimProductsListProps = ForHimProductsListResultProps;
