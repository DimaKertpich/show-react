import { useCallback, useState } from 'react';
import { HeaderResultProps } from '../HeaderProps';

const useHeader = (): HeaderResultProps => {
  const [showPopUp, setShowPopUp] = useState(false);

  const closePopUp = useCallback(() => {
    setShowPopUp(false);
  }, [setShowPopUp]);
  const shouldShowPopup = useCallback(() => {
    setShowPopUp(true);
  }, [setShowPopUp]);

  return { shouldShowPopup, showPopUp, closePopUp };
};

export default useHeader;
