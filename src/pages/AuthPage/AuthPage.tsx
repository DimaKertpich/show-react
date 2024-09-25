import { FC, useCallback } from 'react';
import Registration from './Registration';
import Login from './Login';
import SuccessRegistration from './SuccessRegistration';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '../../shared/styles/main.scss';
import './stylesAuth/activeAuthForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { authToggle } from '../../shared/state/authToggle.ts';
import { successRegister } from '../../shared/state/successRegister.ts';
import { currentAuth } from '../../shared/state/currentAuth.ts';

import { useRecoilState } from 'recoil';

const AuthPage: FC = () => {
  const { t } = useTranslation();
  const [authToggleWindow, setAuthToggleWindow] = useRecoilState(authToggle.atoms.authToggleWindow);
  const [successRegisterWindow] = useRecoilState(successRegister.atoms.successRegisterWindow);
  const [currentAuthSelect, setCurrentAuthSelect] = useRecoilState(currentAuth.atoms.currentAuthToggle);

  const handleToggleAuthWindow = useCallback(() => {
    setAuthToggleWindow(!authToggleWindow);
  }, [authToggleWindow, setAuthToggleWindow]);

  return (
    <Stack
      className={authToggleWindow ? 'animationAuthPageShow' : 'animationAuthPageHide'}
      sx={{
        width: '370px',
        background: '#282629',
        height: '100vh',
        position: 'fixed',
        top: '0',
        zIndex: '1200',
        p: '80px 30px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        boxShadow: '-1px 0px 6px 1px',
      }}
    >
      {successRegisterWindow === false ? (
        <Stack sx={{ zIndex: '1000' }}>
          <Stack justifyContent={'space-between'} direction={'row'}>
            <Typography className={'nunitoSansRegular'} sx={{ fontSize: '22px', color: '#F6F6F6' }}>
              {t('AuthPage.title')}
            </Typography>
            <Typography
              onClick={() => handleToggleAuthWindow()}
              sx={{ fontSize: '18px', cursor: 'pointer', mt: '7px', color: '#F6F6F6' }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Typography>
          </Stack>

          <Stack direction={'row'} justifyContent={'space-between'} sx={{ zIndex: '1500', mt: '40px' }}>
            <Typography
              sx={{ fontSize: '18px', cursor: 'pointer', color: '#F6F6F6' }}
              className={'nunitoSansLight'}
              onClick={() => setCurrentAuthSelect(true)}
            >
              {t('AuthPage.registrationTitle')}
            </Typography>

            <Typography
              sx={{ fontSize: '18px', cursor: 'pointer', color: '#F6F6F6' }}
              className={'nunitoSansLight'}
              onClick={() => setCurrentAuthSelect(false)}
            >
              {t('AuthPage.loginTitle')}
            </Typography>
          </Stack>

          <Stack sx={{ position: 'absolute', mt: '150px', height: '400px', inset: '60px 30px' }}>
            <Registration currentAuthSelect={currentAuthSelect} />
            <Login currentAuthSelect={currentAuthSelect} />
          </Stack>
        </Stack>
      ) : (
        <SuccessRegistration />
      )}

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Stack>
  );
};

export default AuthPage;
