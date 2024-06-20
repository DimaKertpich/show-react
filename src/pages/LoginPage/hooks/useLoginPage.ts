import { RefObject, useCallback, useMemo, useRef } from "react";
import { FormikProps } from "formik";
import { FormikConfig } from "formik/dist/types";
import { LoginPageFormValues, LoginPageResultProps } from "../LoginPageProps";

const useLoginPage = (): LoginPageResultProps => {
  const formRef = useRef<FormikProps<LoginPageFormValues>>();

  const submitForm = useCallback((values: LoginPageFormValues) => {
    console.log(values);
  }, []);

  const formProps = useMemo<FormikConfig<LoginPageFormValues>>(() => {
    return {
      enableReinitialize: true,
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: submitForm,
      innerRef: formRef as RefObject<FormikProps<LoginPageFormValues>>,
      validateOnMount: false,
    };
  }, [submitForm]);

  return { formProps };
};
export default useLoginPage;
