import { FC } from 'react';
import Header from './Header';
import useHeader from './hooks/useHeader';

const HeaderContainer: FC = () => {
  const headerProps = useHeader();
  return <Header {...headerProps} />;
};

export default HeaderContainer;
