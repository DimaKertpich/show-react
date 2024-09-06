import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import LoginPageForm from './components/LoginPageForm';
import { Formik } from 'formik';
import { LoginPageProps } from './LoginProps';

const Login: FC<LoginPageProps> = ({ formProps }) => {
  return (
    <Stack>
      <Typography>Title</Typography>

      <Formik {...formProps}>
        <LoginPageForm />
      </Formik>
    </Stack>
  );
};

export default Login;
