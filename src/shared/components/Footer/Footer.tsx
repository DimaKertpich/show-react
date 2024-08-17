import { Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import '../../styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <Stack sx={{ background: '#141414', p: '10px' }}>
      <Container>
        <Stack flexDirection={'row'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack>
            <Typography className="nunitoSansMedium" sx={{ color: 'white', fontSize: '14px' }}>
              © 2023-2024 FORGE
            </Typography>
          </Stack>
          <Stack flexDirection={'row'} sx={{ color: 'White', cursor: 'pointer' }}>
            <Typography sx={{ fontSize: '14px', pr: '16px', color: '#858585', textDecoration: 'underline' }}>
              {t('footer.support')}
            </Typography>
            <FontAwesomeIcon style={{ paddingRight: '16px', fontSize: '14px', paddingTop: '3px' }} icon={faInstagram} />
            <FontAwesomeIcon style={{ fontSize: '14px', paddingTop: '3px' }} icon={faFacebook} />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
