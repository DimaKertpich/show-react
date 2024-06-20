import { FormikConfig } from "formik/dist/types";

export type LoginPageFormValues = {
  email: string;
  password: string;
};
export type LoginPageResultProps = {
  formProps: FormikConfig<LoginPageFormValues>;
};

export type LoginPageProps = LoginPageResultProps;
