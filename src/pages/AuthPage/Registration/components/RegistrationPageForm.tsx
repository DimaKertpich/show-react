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
      <Stack spacing={1}>
        <Field name="username" component={TextFormField} placeholder="Name" hiddenLabel />
        <Field name="email" component={TextFormField} placeholder="Email" hiddenLabel />
        <Field name="password" component={TextFormField} placeholder="Password" hiddenLabel />

        <Stack direction={'row'} justifyContent={'space-around'}>
          <Button type="submit" disabled={!dirty}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default RegistrationPageForm;
