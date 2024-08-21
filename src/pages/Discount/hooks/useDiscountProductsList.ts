import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Product } from '../../../shared/types';
import { DiscountProductsListProps } from '../DiscountProductsListProps';

const useDiscountProductsList = (): DiscountProductsListProps => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useInfiniteQuery({
    queryKey: ['getDiscountProducts'],
    queryFn: async ({ pageParam }) => {
      return (
        await fetch(`http://localhost:9090/api/products/get_products/with_discount/several?_page=${pageParam}&_limit=4`)
      ).json();
    },
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => {
      return allPages.length + 1;
    },
  });

  const products = useMemo(() => {
    if (!data) return [];
    return data.pages.flatMap((page) => page || []);
  }, [data]);

  return {
    products,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useDiscountProductsList;
