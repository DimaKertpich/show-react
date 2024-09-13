import { Button, Stack } from '@mui/material';
import { Form, Field, useFormikContext } from 'formik';
import { FC } from 'react';
import TextFormField from '../../../../shared/components/TextFormField';
import { UserFormLogin } from '../../../../shared/types';

const LoginPageForm: FC = () => {
  const { dirty } = useFormikContext<UserFormLogin>();

  return (
    <Form>
      <Stack spacing={1}>
        <Field name="email" component={TextFormField} placeholder="email" hiddenLabel />
        <Field type="password" name="password" component={TextFormField} placeholder="password" hiddenLabel />

        <Button type="submit" disabled={!dirty}>
          Login
        </Button>
      </Stack>
    </Form>
  );
};

export default LoginPageForm;
