import { FC } from 'react';
import LanguageSelector from './LanguageSelector';
import useLanguageSelector from './hooks';

const LanguageSelectorContainer: FC = () => {
  const languageSelectorProps = useLanguageSelector();
  return <LanguageSelector {...languageSelectorProps} />;
};
export default LanguageSelectorContainer;
