import { Product } from '../../shared/types';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';

export type DiscountProductsListResultProps = {
  products: Product[];
  isLoading: boolean;
  loadMore: () => void;
  // isError: boolean;
  // fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
  // hasNextPage: boolean;
  // isFetchingNextPage: boolean;
};

export type DiscountProductsListProps = DiscountProductsListResultProps;
