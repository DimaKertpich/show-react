import { Button, Stack } from '@mui/material';
import { Field, Form, useFormikContext } from 'formik';
import { FC } from 'react';
import { UserFormRegistration } from '../../../../shared/types';
import TextFormField from '../../../../shared/components/TextFormField';

const RegistrationPageForm: FC = () => {
  const { values, dirty } = useFormikContext<UserFormRegistration>();
  console.log('values, dirty', values, dirty);

  return (
    <Form>
      <Stack>
        <Field name="username" component={TextFormField} placeholder="Field" hiddenLabel />
        <Field name="email" component={TextFormField} placeholder="email" hiddenLabel />
        <Field name="password" component={TextFormField} placeholder="password" hiddenLabel />

        <Button type="submit" disabled={!dirty}>
          Submit
        </Button>
      </Stack>
    </Form>
  );
};

export default RegistrationPageForm;
