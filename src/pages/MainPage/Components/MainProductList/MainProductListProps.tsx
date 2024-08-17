import { Product } from '../../../../shared/types';

export type MainProductListResultProps = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};

export type MainProductListProps = MainProductListResultProps;
