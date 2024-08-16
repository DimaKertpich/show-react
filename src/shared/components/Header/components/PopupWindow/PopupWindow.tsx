import { Stack, Grid, Container, Typography } from '@mui/material';
import { FC } from 'react';
import hoodies from '../../../../styles/img/popupWindow/1.jpg';
import pants from '../../../../styles/img/popupWindow/2.jpg';
import shirts from '../../../../styles/img/popupWindow/3.jpg';
import jackets from '../../../../styles/img/popupWindow/4.jpg';
import accessories from '../../../../styles/img/popupWindow/5.jpg';
import tShirts from '../../../../styles/img/popupWindow/6.jpg';
import { useTranslation } from 'react-i18next';
import '../../../../styles/main.scss';

type Props = { className?: string };

const PopupWindow: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  const clothingCategories: { image: string; name: string }[] = [
    {
      image: hoodies,
      name: t('poppupwindow.hoodies'),
    },
    {
      image: pants,
      name: t('poppupwindow.pants'),
    },
    {
      image: shirts,
      name: t('poppupwindow.shirts'),
    },
    {
      image: jackets,
      name: t('poppupwindow.jackets'),
    },
    {
      image: accessories,
      name: t('poppupwindow.accessories'),
    },
    {
      image: tShirts,
      name: t('poppupwindow.tShirts'),
    },
  ];

  return (
    <Stack
      className={className}
      sx={{
        background: 'White',
        width: '100%',
        position: 'absolute',
        top: '100%',
        left: '0',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Grid container spacing={4} rowSpacing={5} sx={{ mt: '-10px' }}>
          {clothingCategories.map((item, index) => (
            <Grid item xs={3} key={index}>
              <Typography className="montserratMedium" sx={{ color: 'Black', fontSize: '18px' }}>
                {item.name}
              </Typography>
              <img src={item.image} style={{ width: '100%', marginTop: '10px', cursor: 'pointer' }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default PopupWindow;
