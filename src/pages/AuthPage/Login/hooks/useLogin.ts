import { FormikConfig, FormikProps } from 'formik';
import { UserFormLoginResultProps } from '../LoginProps';
import { UserFormLogin } from '../../../../shared/types';
import { RefObject, useCallback, useMemo, useRef } from 'react';
import useLoginData from '../../../../shared/hooks/useLoginData';
import { useCookie } from 'react-use';

const useLogin = (): UserFormLoginResultProps => {
  const [userTokenCookie, setUserTokenCookie] = useCookie('userToken');
  const [userRoleCookie, setUserRoleCookie] = useCookie('userRole');
  const formRef = useRef<FormikProps<UserFormLogin>>();
  const { postLoginMutation } = useLoginData();

  const submitForm = useCallback(
    async (values: UserFormLogin) => {
      await postLoginMutation.mutateAsync(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess: (data) => {
            setUserTokenCookie(data.token, { path: '/' });
            setUserRoleCookie(data.role, { path: '/' });
          },
        }
      );
    },
    [postLoginMutation, setUserTokenCookie, setUserRoleCookie]
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
