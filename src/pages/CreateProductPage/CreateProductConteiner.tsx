import { FC } from 'react';
import useCreateProduct from './hooks/useCreateProduct';
import CreateProductPage from './CreateProductPage';

const CreateProductContainer: FC = () => {
  const loginPageProps = useCreateProduct();
  return <CreateProductPage {...loginPageProps} />;
};

export default CreateProductContainer;
