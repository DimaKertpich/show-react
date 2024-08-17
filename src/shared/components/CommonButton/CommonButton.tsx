import React from 'react';
import '../../styles/main.scss';
import { Button, ButtonProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props extends ButtonProps {
  text: string;
}

const CommonButton: React.FC<Props> = ({ text, ...ButtonProps }) => {
  const { t } = useTranslation();
  return (
    <Button color={'inherit'} className="montserratRegular" {...ButtonProps}>
      {t(text)}
    </Button>
  );
};

export default CommonButton;
