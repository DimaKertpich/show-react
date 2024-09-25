import { Stack } from '@mui/material';
import { FC } from 'react';
import RegistrationPageForm from './components/RegistrationPageForm';
import { Formik } from 'formik';
import { RegistraionPageProps } from './RegistraionProps';
import '../stylesAuth/activeAuthForm.scss';

const Registration: FC<RegistraionPageProps> = ({ formProps, currentAuthSelect }) => {
  return (
    <Stack
      className={currentAuthSelect ? 'activeAuth' : 'baseRigstraion'}
      sx={{ position: 'absolute', width: '100%', transition: '.4s ease-out' }}
    >
      <Formik {...formProps}>
        <RegistrationPageForm />
      </Formik>
    </Stack>
  );
};

export default Registration;
