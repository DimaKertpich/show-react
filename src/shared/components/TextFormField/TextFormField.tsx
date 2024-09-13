import React from 'react';
import { SxProps, TextField } from '@mui/material';
import { FieldProps } from 'formik';
import type { TextFieldProps } from '@mui/material';

type Props = TextFieldProps & FieldProps & { styles: SxProps };

export const TextFormField: React.FC<Props> = ({ field, placeholder, hiddenLabel, label, styles, ...props }) => {
  return (
    <TextField {...props} {...field} placeholder={placeholder} label={hiddenLabel ? null : label} sx={{ ...styles }} />
  );
};

export default TextFormField;
