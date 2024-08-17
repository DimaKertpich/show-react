import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../../../../../shared/types';
import { MainProductListResultProps } from '../MainProductListProps';

const useMainProductList = (): MainProductListResultProps => {
  const productsQuery = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      return (await fetch('http://localhost:9090/api/products/get_products')).json();
    },
    enabled: true,
    select: (data) => {
      return data;
    },
  });

  const products = useMemo(() => {
    if (!productsQuery.isSuccess) return [];
    return productsQuery.data;
  }, [productsQuery]);

  return {
    products,
    isLoading: productsQuery.isLoading,
    isError: productsQuery.isError,
  };
};

export default useMainProductList;
