import React from 'react';
import { TextField } from '@mui/material';
import { FieldProps } from 'formik';
import type { TextFieldProps } from '@mui/material';

type Props = TextFieldProps & FieldProps;

export const TextFormField: React.FC<Props> = ({ field, placeholder, hiddenLabel, label, ...props }) => {
  return <TextField {...props} {...field} placeholder={placeholder} label={hiddenLabel ? null : label} />;
};

export default TextFormField;
