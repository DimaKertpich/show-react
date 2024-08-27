import { FC } from 'react';
import ForHimProductsList from './ForHimProductsList';
import useForHimProductsList from './hooks/useForHimProductList';

const ForHimProductsListContainer: FC = () => {
  const forHimProductsListProps = useForHimProductsList();

  return <ForHimProductsList {...forHimProductsListProps} />;
};

export default ForHimProductsListContainer;
