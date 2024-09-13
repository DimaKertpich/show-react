import { FC } from 'react';
import Login from './Login';
import useLogin from './hooks/useLogin';
import { LoginPageContainerProps } from './LoginProps.tsx';

const LoginContainer: FC<LoginPageContainerProps> = (props) => {
  const loginPageProps = useLogin();
  return <Login {...loginPageProps} {...props} />;
};
export default LoginContainer;
