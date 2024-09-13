import { FC } from 'react';
import { CreateProductPageProps } from './CreateProductProps';
import { Formik } from 'formik';
import CreateProductForm from './components/CreateProductForm';

const CreateProductPage: FC<CreateProductPageProps> = ({ formProps }) => {
  return (
    <Formik {...formProps}>
      <CreateProductForm />
    </Formik>
  );
};

export default CreateProductPage;
