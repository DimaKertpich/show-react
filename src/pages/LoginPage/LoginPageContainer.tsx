import { FC } from 'react';
import useLoginPage from './hooks';
import LoginPage from './LoginPage';

const LoginPageContainer: FC = () => {
  const loginPageProps = useLoginPage();
  return <LoginPage {...loginPageProps} />;
};
export default LoginPageContainer;
