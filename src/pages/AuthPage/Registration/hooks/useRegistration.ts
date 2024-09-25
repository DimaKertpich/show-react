import { RefObject, useCallback, useMemo, useRef } from 'react';
import { UserFormRegistrationResultProps } from '../RegistraionProps';
import { UserFormRegistration } from '../../../../shared/types';
import { FormikConfig, FormikProps } from 'formik';
import useRegistrationData from '../../../../shared/hooks/useRegistrationData';
import { successRegister } from '../../../../shared/state/successRegister.ts';
import { useRecoilState } from 'recoil';

const useRegistration = (): UserFormRegistrationResultProps => {
  const formRef = useRef<FormikProps<UserFormRegistration>>();
  const { postRegistrationMutation } = useRegistrationData();
  const [successRegisterWindow, setSuccessRegisterWindow] = useRecoilState(successRegister.atoms.successRegisterWindow);

  console.log('successRegisterWindow', successRegisterWindow);

  const handleToggleSuccessWindow = useCallback(() => {
    setSuccessRegisterWindow(true);
  }, [setSuccessRegisterWindow]);

  const submitForm = useCallback(
    async (values: UserFormRegistration) => {
      await postRegistrationMutation.mutateAsync(
        {
          username: values.username,
          email: values.email,
          password: values.password,
        },
        { onSuccess: () => handleToggleSuccessWindow() } // Need to fix
      );
    },
    [postRegistrationMutation, handleToggleSuccessWindow]
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
