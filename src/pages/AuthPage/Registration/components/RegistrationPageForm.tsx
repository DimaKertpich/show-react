import { Button, Stack, Typography } from '@mui/material';
import { Field, Form, useFormikContext } from 'formik';
import { FC } from 'react';
import { UserFormRegistration } from '../../../../shared/types';
import TextFormField from '../../../../shared/components/TextFormField';
import { useTranslation } from 'react-i18next';

const RegistrationPageForm: FC = () => {
  const { dirty } = useFormikContext<UserFormRegistration>();
  const { t } = useTranslation();

  return (
    <Form>
      <Stack spacing={2}>
        <Field
          className={'registraion__input'}
          name="username"
          component={TextFormField}
          placeholder={t('AuthPage.name')}
          hiddenLabel
        />
        <Field
          className={'registraion__input'}
          name="email"
          component={TextFormField}
          placeholder={t('AuthPage.email')}
          hiddenLabel
        />
        <Field
          className={'registraion__input'}
          type="password"
          name="password"
          component={TextFormField}
          placeholder={t('AuthPage.password')}
          hiddenLabel
        />

        <Stack direction={'row'} justifyContent={'space-around'}>
          <Button type="submit" disabled={!dirty}>
            <Typography sx={{ color: 'white', fontSize: '14px', mt: '20px' }}>{t('AuthPage.createAcount')}</Typography>
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default RegistrationPageForm;
