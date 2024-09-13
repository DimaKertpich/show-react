import { FC, useCallback, useState } from 'react';
import Registration from './Registration';
import { Stack, Typography } from '@mui/material';
import Login from './Login';
import { useTranslation } from 'react-i18next';
import '../../shared/styles/main.scss';
import './stylesAuth/activeAuthForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { authToggle } from '../../shared/state/authToggle.ts';
import { useRecoilState } from 'recoil';

const AuthPage: FC = () => {
  const [currentAuth, setCurrentAuth] = useState(true);
  const { t } = useTranslation();
  const [authToggleWindow, setAuthToggleWindow] = useRecoilState(authToggle.atoms.authToggleWindow);

  const handleToggleAuthWindow = useCallback(() => {
    setAuthToggleWindow(!authToggleWindow);
  }, [authToggleWindow, setAuthToggleWindow]);

  return (
    <Stack
      className={authToggleWindow ? 'animationAuthPageShow' : 'animationAuthPageHide'}
      sx={{
        width: '370px',
        background: 'white',
        height: '100vh',
        position: 'fixed',
        top: '0',
        zIndex: '1200',
        p: '80px 30px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Stack justifyContent={'space-between'} direction={'row'}>
        <Typography className={'nunitoSansLight'} sx={{ fontSize: '22px' }}>
          {t('AuthPage.title')}
        </Typography>
        <Typography onClick={() => handleToggleAuthWindow()} sx={{ fontSize: '18px', cursor: 'pointer', mt: '7px' }}>
          <FontAwesomeIcon icon={faXmark} />
        </Typography>
      </Stack>

      <Stack direction={'row'} justifyContent={'space-between'} sx={{ zIndex: '1500', mt: '40px' }}>
        <Typography
          sx={{ fontSize: '18px', cursor: 'pointer' }}
          className={'nunitoSansLight'}
          onClick={() => setCurrentAuth(true)}
        >
          {t('AuthPage.registrationTitle')}
        </Typography>
        <Typography
          sx={{ fontSize: '18px', cursor: 'pointer' }}
          className={'nunitoSansLight'}
          onClick={() => setCurrentAuth(false)}
        >
          {t('AuthPage.loginTitle')}
        </Typography>
      </Stack>

      <Stack sx={{ position: 'absolute', mt: '150px', height: '400px', inset: '60px 30px' }}>
        <Registration currentAuth={currentAuth} />
        <Login currentAuth={currentAuth} />
      </Stack>
    </Stack>
  );
};

export default AuthPage;
