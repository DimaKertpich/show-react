import { Select, SelectProps } from '@mui/material';
import { FieldProps } from 'formik';
import React from 'react';

type SelectFormFieldProps = FieldProps & SelectProps;

const SelectFormField: React.FC<SelectFormFieldProps> = ({ field, form, ...props }) => {
  return (
    <Select {...field} {...props} fullWidth>
      {props.children}
    </Select>
  );
};

export default SelectFormField;
