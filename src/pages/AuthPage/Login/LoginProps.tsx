import { FormikConfig } from 'formik';
import { UserFormLogin } from '../../../shared/types';

export type UserFormLoginResultProps = {
  formProps: FormikConfig<UserFormLogin>;
};

export type LoginPageProps = UserFormLoginResultProps;
