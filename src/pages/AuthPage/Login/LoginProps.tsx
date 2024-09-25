import { FormikConfig } from 'formik';
import { UserFormLogin } from '../../../shared/types';

export type UserFormLoginResultProps = {
  formProps: FormikConfig<UserFormLogin>;
};

export type LoginPageContainerProps = {
  currentAuthSelect: boolean;
};

export type LoginPageProps = UserFormLoginResultProps & LoginPageContainerProps;
