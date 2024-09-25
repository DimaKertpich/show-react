import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import CheckRegistr from '../../../shared/styles/img/successRegistration/checked.png';
import { useTranslation } from 'react-i18next';
import '../../../shared/styles/main.scss';
import { successRegister } from '../../../shared/state/successRegister.ts';
import { useSetRecoilState } from 'recoil';
import { currentAuth } from '../../../shared/state/currentAuth.ts';

const SuccessRegistration: FC = () => {
  const { t } = useTranslation();
  const setSuccesRegisterWindow = useSetRecoilState(successRegister.atoms.successRegisterWindow);
  const setCurrentAuth = useSetRecoilState(currentAuth.atoms.currentAuthToggle);

  const handleSuccesseWindow = () => {
    setSuccesRegisterWindow(false);
    setCurrentAuth(false);
  };

  return (
    <Stack
      sx={{
        background: 'transparent',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '1800',
        textAlign: 'center',
        pt: '220px',
      }}
    >
      <Stack sx={{ width: '36%', margin: '0 auto' }}>
        <img src={CheckRegistr} alt={'check'} />
      </Stack>
      <Stack>
        <Typography className={'nunitoSansLight'} sx={{ fontSize: '20px', mt: '20px', color: '#fff' }}>
          {t('SuccessRegistr.title')}
        </Typography>
      </Stack>
      <div style={{ zIndex: '2000' }}>
        <button
          className={'nunitoSansRegular'}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid',
            background: '#0AA06E',
            color: 'white',
            cursor: 'pointer',
            fontSize: '18px',
            marginTop: '40px',
          }}
          onClick={() => handleSuccesseWindow()}
        >
          {t('SuccessRegistr.buttonText')}
        </button>
      </div>
    </Stack>
  );
};
export default SuccessRegistration;
