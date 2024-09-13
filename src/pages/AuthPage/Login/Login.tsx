import { Stack } from '@mui/material';
import { FC } from 'react';
import LoginPageForm from './components/LoginPageForm';
import { Formik } from 'formik';
import { LoginPageProps } from './LoginProps';
import '../stylesAuth/activeAuthForm.scss';

const Login: FC<LoginPageProps> = ({ formProps, currentAuth }) => {
  return (
    <Stack
      className={currentAuth ? 'baseLogin' : 'activeAuth'}
      sx={{
        position: 'absolute',
        left: '360px',
        width: '100%',
        top: '0px',
        transition: '.4s ease-out',
      }}
    >
      <Formik {...formProps}>
        <LoginPageForm />
      </Formik>
    </Stack>
  );
};

export default Login;
