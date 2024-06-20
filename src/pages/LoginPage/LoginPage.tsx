import { FC } from "react";
import { LoginPageProps } from "./LoginPageProps";
import { Formik } from "formik";
import LoginPageForm from "./components/LoginPageForm";

const LoginPage: FC<LoginPageProps> = ({ formProps }) => {
  return (
    <Formik {...formProps}>
      <LoginPageForm />
    </Formik>
  );
};
export default LoginPage;
