import { FC } from 'react';
import Registration from './Registration';
import useRegistration from './hooks/useRegistration';

const RegistrationContainer: FC = () => {
  const registrationPageProps = useRegistration();
  return <Registration {...registrationPageProps} />;
};

export default RegistrationContainer;
