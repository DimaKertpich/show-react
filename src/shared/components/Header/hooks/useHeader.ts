import { useCallback, useState } from "react";
import { HeaderResultProps } from "../HeaderProps";

const useHeader = (): HeaderResultProps => {
    
    const [showPopUp, setShowPopUp] = useState(false);
    
    const shouldShowPopup = useCallback(() => {
        setShowPopUp(!showPopUp)
    }, [showPopUp, setShowPopUp])
    
    return{shouldShowPopup, showPopUp}
}

export default useHeader;
