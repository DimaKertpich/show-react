import { Button, Stack, Typography } from '@mui/material';
import { Form, Field, useFormikContext } from 'formik';
import { FC } from 'react';
import TextFormField from '../../../../shared/components/TextFormField';
import { UserFormLogin } from '../../../../shared/types';
import '../../stylesAuth/activeAuthForm.scss';
import { useTranslation } from 'react-i18next';

const LoginPageForm: FC = () => {
  const { dirty } = useFormikContext<UserFormLogin>();
  const { t } = useTranslation();

  return (
    <Form>
      <Stack spacing={2}>
        <Field
          className={'login__input'}
          name="email"
          component={TextFormField}
          placeholder={t('AuthPage.email')}
          hiddenLabel
        />
        <Field
          className={'login__input'}
          type="password"
          name="password"
          component={TextFormField}
          placeholder={t('AuthPage.password')}
          hiddenLabel
        />

        <Button type="submit" disabled={!dirty}>
          <Typography sx={{ color: 'white', fontSize: '14px', mt: '20px' }}>{t('AuthPage.login')}</Typography>
        </Button>
      </Stack>
    </Form>
  );
};

export default LoginPageForm;
