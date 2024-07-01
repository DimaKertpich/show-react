import React from "react";
import '../../styles/main.scss';
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps{
    text: string;
}

const ButtonComponent: React.FC<Props> = ({text, ...ButtonProps}) => {

    return(
        <Button
            color={'inherit'}
            className="montserratRegular"
            {...ButtonProps}
        >
            {text}
        </Button>
    )
}

export default ButtonComponent;