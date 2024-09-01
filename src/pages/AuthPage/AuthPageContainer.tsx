import { FC } from 'react';
import AuthPage from './AuthPage';
import useRegistration from './hooks/useRegistration';

const AuthPageContainer: FC = () => {
  const authPageProps = useRegistration();
  return <AuthPage {...authPageProps} />;
};

export default AuthPageContainer;
