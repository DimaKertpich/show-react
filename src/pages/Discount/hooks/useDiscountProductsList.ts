import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { DiscountProductsListProps } from '../DiscountProductsListProps';

const useDiscountProductsList = (): DiscountProductsListProps => {
  const discountQuery = useInfiniteQuery({
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
    if (!discountQuery.data) return [];
    return discountQuery.data.pages.flatMap((page) => page || []);
  }, [discountQuery]);

  const loadMore = async () => {
    if (discountQuery.hasNextPage && !discountQuery.isFetching) await discountQuery.fetchNextPage();
  };

  return {
    products,
    isLoading: discountQuery.isFetching,
    loadMore,
    // isLoading,
    // isError,
    // fetchNextPage,
    // hasNextPage,
    // isFetchingNextPage,
  };
};

export default useDiscountProductsList;
