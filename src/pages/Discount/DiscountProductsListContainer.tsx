import { FC } from 'react';
import DiscountProductsList from './DiscountProductsList';
import useDiscountProductsList from './hooks/useDiscountProductsList';

const DiscountProductsListContainer: FC = () => {
  const discountProductsListProps = useDiscountProductsList();

  return <DiscountProductsList {...discountProductsListProps} />;
};

export default DiscountProductsListContainer;
