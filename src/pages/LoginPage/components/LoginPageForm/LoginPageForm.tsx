import { FC } from 'react';
import { Field, Form, useFormikContext } from 'formik';
import { Button, Stack } from '@mui/material';
import { LoginPageFormValues } from '../../LoginPageProps';
import TextFormField from '../../../../shared/components/TextFormField';
import { useTranslation } from 'react-i18next';

const LoginPageForm: FC = () => {
  const { values, dirty } = useFormikContext<LoginPageFormValues>();
  const { t } = useTranslation();

  return (
    <Form>
      <Stack justifyContent="center" alignItems="center" sx={{ mt: '100px' }}>
        <Field
          name="email"
          sx={{ mt: 0, width: '300px' }}
          component={TextFormField}
          placeholder={t('login.emailPlaceholder')}
          hiddenLabel
        />
        <Field
          name="password"
          sx={{ mt: 0, width: '300px' }}
          component={TextFormField}
          placeholder={t('login.passPlaceholder')}
          hiddenLabel
        />
        <Button type="submit" disabled={!dirty}>
          {t('login.signIn')}
        </Button>
      </Stack>
    </Form>
  );
};
export default LoginPageForm;
