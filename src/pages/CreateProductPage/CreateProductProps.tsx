import { FormikConfig } from 'formik/dist/types';
import { ProductForCreate } from '../../shared/types';

export type CreateProductPageResultProps = {
  formProps: FormikConfig<ProductForCreate>;
};

export type CreateProductPageProps = CreateProductPageResultProps;
