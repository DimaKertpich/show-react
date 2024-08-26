import { Container, Stack } from '@mui/material';
import { FC, useMemo } from 'react';
import AboutUsSection from './components/AboutUsSection';
import footerImg from '../../shared/styles/img/AboutUs/Group 7.png';
import { useTranslation } from 'react-i18next';
import { AboutUsItem } from './AboutUsPageProps';

const AboutUsPage: FC = () => {
  const { t } = useTranslation();

  const ourPrinciple: AboutUsItem[] = useMemo(() => {
    return t('AboutUs', { returnObjects: true }) as AboutUsItem[];
  }, [t]);

  return (
    <Stack sx={{ p: '60px 0 40px 0' }}>
      <Stack>
        <img src={footerImg}></img>
      </Stack>
      <Container>
        {ourPrinciple.map((item, index) => (
          <AboutUsSection key={index} data={item} />
        ))}
      </Container>
    </Stack>
  );
};

export default AboutUsPage;
