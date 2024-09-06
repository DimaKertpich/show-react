import { FormikConfig, FormikProps } from 'formik';
import { UserFormLoginResultProps } from '../LoginProps';
import { UserFormLogin } from '../../../../shared/types';
import { RefObject, useCallback, useMemo, useRef } from 'react';
import useLoginData from '../../../../shared/hooks/useLoginData';
import { useCookie } from 'react-use';

const useLogin = (): UserFormLoginResultProps => {
  const [userCookie, setUserCookie] = useCookie('userToken');
  const formRef = useRef<FormikProps<UserFormLogin>>();
  const { postLoginMutation } = useLoginData();

  const submitForm = useCallback(
    async (values: UserFormLogin) => {
      await postLoginMutation.mutateAsync(
        {
          email: values.email,
          password: values.password,
        },
        { onSuccess: (data) => setUserCookie(data.token, { path: '/' }) }
      );
    },
    [postLoginMutation, setUserCookie]
  );

  const formProps = useMemo<FormikConfig<UserFormLogin>>(() => {
    return {
      enableReinitialize: true,
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: submitForm,
      innerRef: formRef as RefObject<FormikProps<UserFormLogin>>,
      validateOnMount: false,
    };
  }, [submitForm]);

  return { formProps };
};

export default useLogin;
