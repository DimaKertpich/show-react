import { FC } from 'react';
import MainProductList from './MainProductList';
import useMainProductList from './hooks/useMainProductList';

const MainProductListContainer: FC = () => {
  const mainProductListProps = useMainProductList();

  return <MainProductList {...mainProductListProps} />;
};

export default MainProductListContainer;
