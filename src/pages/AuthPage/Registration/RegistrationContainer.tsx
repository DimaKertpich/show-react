import { FC } from 'react';
import Registration from './Registration';
import useRegistration from './hooks/useRegistration';
import { RegistrationContainerProps } from './RegistraionProps.tsx';

const RegistrationContainer: FC<RegistrationContainerProps> = (props) => {
  const registrationPageProps = useRegistration();
  return <Registration {...registrationPageProps} {...props} />;
};

export default RegistrationContainer;
