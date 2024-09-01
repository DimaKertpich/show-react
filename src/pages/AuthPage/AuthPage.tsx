import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import RegistrationPageForm from './components/RegistrationPageForm';
import { Formik } from 'formik';
import { AuthPageProps } from './AuthPageProps';

const AuthPage: FC<AuthPageProps> = ({ formProps }) => {
  return (
    <Stack
      sx={{
        width: '360px',
        background: 'white',
        height: '100vh',
        position: 'fixed',
        top: '0',
        right: '0',
        zIndex: '1200',
        p: '60px 30px',
        boxSizing: 'border-box',
      }}
    >
      <Typography textAlign={'center'}>Title</Typography>

      <Formik {...formProps}>
        <RegistrationPageForm />
      </Formik>
    </Stack>
  );
};

export default AuthPage;
