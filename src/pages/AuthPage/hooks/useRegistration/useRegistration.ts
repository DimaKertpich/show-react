import { RefObject, useCallback, useMemo, useRef } from 'react';
import { UserFormRegistrationResultProps } from '../../AuthPageProps';
import { UserFormRegistration } from '../../../../shared/types';
import { FormikConfig, FormikProps } from 'formik';
import useRegistrationData from '../../../../shared/hooks/useRegistrationData';

const useRegistration = (): UserFormRegistrationResultProps => {
  const formRef = useRef<FormikProps<UserFormRegistration>>();
  const { postRegistrationMutation } = useRegistrationData();

  const submitForm = useCallback(
    async (values: UserFormRegistration) => {
      await postRegistrationMutation.mutateAsync({
        username: values.username,
        email: values.email,
        password: values.password,
      });
    },
    [postRegistrationMutation]
  );

  const formProps = useMemo<FormikConfig<UserFormRegistration>>(() => {
    return {
      enableReinitialize: true,
      initialValues: {
        username: '',
        email: '',
        password: '',
      },
      onSubmit: submitForm,
      innerRef: formRef as RefObject<FormikProps<UserFormRegistration>>,
      validateOnMount: false,
    };
  }, [submitForm]);

  return { formProps };
};

export default useRegistration;
