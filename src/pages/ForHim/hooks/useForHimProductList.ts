import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ForHimProductsListProps } from '../ForHimProductsListProps';
import { useParams } from 'react-router-dom';

const useForHimProductsList = (): ForHimProductsListProps => {
  const { catagoryName } = useParams();
  const catagory = useMemo(() => {
    return catagoryName;
  }, [catagoryName]);
  const pageTitle = useMemo(() => {
    return `${catagoryName?.toLowerCase()}`;
  }, [catagoryName]);

  const forHimQuery = useInfiniteQuery({
    queryKey: ['getForHimProducts', catagory],
    queryFn: async ({ pageParam }) => {
      return (
        await fetch(`http://localhost:9090/api/products/get_products/several/${catagory}?_page=${pageParam}&_limit=4`)
      ).json();
    },
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => {
      return allPages.length + 1;
    },
  });

  const products = useMemo(() => {
    if (!forHimQuery.data) return [];
    return forHimQuery.data.pages.flatMap((page) => page || []);
  }, [forHimQuery]);

  const loadMore = async () => {
    if (forHimQuery.hasNextPage && !forHimQuery.isFetching) await forHimQuery.fetchNextPage();
  };

  return {
    products,
    isLoading: forHimQuery.isFetching,
    loadMore,
    pageTitle,
  };
};

export default useForHimProductsList;
