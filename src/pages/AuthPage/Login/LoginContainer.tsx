import { FC } from 'react';
import Login from './Login';
import useLogin from './hooks/useLogin';

const LoginContainer: FC = () => {
  const loginPageProps = useLogin();
  return <Login {...loginPageProps} />;
};
export default LoginContainer;
