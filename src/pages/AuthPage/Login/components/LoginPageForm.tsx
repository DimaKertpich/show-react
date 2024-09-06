import { Button, Stack } from '@mui/material';
import { Form, Field, useFormikContext } from 'formik';
import { FC } from 'react';
import TextFormField from '../../../../shared/components/TextFormField';
import { UserFormLogin } from '../../../../shared/types';

const LoginPageForm: FC = () => {
  const { values, dirty } = useFormikContext<UserFormLogin>();
  return (
    <Form>
      <Stack>
        <Field name="email" component={TextFormField} placeholder="email" hiddenLabel />
        <Field name="password" component={TextFormField} placeholder="password" hiddenLabel />

        <Button type="submit" disabled={!dirty}>
          Login
        </Button>
      </Stack>
    </Form>
  );
};

export default LoginPageForm;
