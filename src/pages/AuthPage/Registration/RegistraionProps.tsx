import { FormikConfig } from 'formik';
import { UserFormRegistration } from '../../../shared/types';

export type UserFormRegistrationResultProps = {
  formProps: FormikConfig<UserFormRegistration>;
};

export type RegistrationContainerProps = {
  currentAuthSelect: boolean;
};

export type RegistraionPageProps = UserFormRegistrationResultProps & RegistrationContainerProps;
