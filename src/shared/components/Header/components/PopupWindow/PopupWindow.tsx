import { Stack, Grid, Container, Typography } from '@mui/material';
import { FC, useCallback, useMemo } from 'react';
import hoodies from '../../../../styles/img/popupWindow/1.jpg';
import pants from '../../../../styles/img/popupWindow/2.jpg';
import shirts from '../../../../styles/img/popupWindow/3.jpg';
import jackets from '../../../../styles/img/popupWindow/4.jpg';
import accessories from '../../../../styles/img/popupWindow/5.jpg';
import tShirts from '../../../../styles/img/popupWindow/6.jpg';
import { useTranslation } from 'react-i18next';
import '../../../../styles/main.scss';
import { useNavigate } from 'react-router-dom';
import { pageUrls } from '../../../../../pageUrls';

enum ForHimCategoriesEnum {
  Hoodies = 'Hoodies',
  Pants = 'Pants',
  Shirts = 'Shirts',
  Jackets = 'Jackets',
  Accessories = 'Accessories',
  TShirts = 'TShirts',
}

type Props = {
  className?: string;
  closePopUp: () => void;
};

const PopupWindow: FC<Props> = ({ className, closePopUp }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const clothingCategories: { image: string; name: string; categoryName: string }[] = useMemo(() => {
    return [
      {
        image: hoodies,
        name: t('poppupwindow.hoodies'),
        categoryName: ForHimCategoriesEnum.Hoodies,
      },
      {
        image: pants,
        name: t('poppupwindow.pants'),
        categoryName: ForHimCategoriesEnum.Pants,
      },
      {
        image: shirts,
        name: t('poppupwindow.shirts'),
        categoryName: ForHimCategoriesEnum.Shirts,
      },
      {
        image: jackets,
        name: t('poppupwindow.jackets'),
        categoryName: ForHimCategoriesEnum.Jackets,
      },
      {
        image: accessories,
        name: t('poppupwindow.accessories'),
        categoryName: ForHimCategoriesEnum.Accessories,
      },
      {
        image: tShirts,
        name: t('poppupwindow.tshirts'),
        categoryName: ForHimCategoriesEnum.TShirts,
      },
    ];
  }, [t]);

  const onSelectCategory = useCallback(
    (item: { image: string; name: string; categoryName: string }) => {
      navigate(`${pageUrls.ForHim}/${item.categoryName}`);
      closePopUp();
    },
    [navigate, closePopUp]
  );

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
              <img
                src={item.image}
                style={{ width: '100%', marginTop: '10px', cursor: 'pointer' }}
                onClick={() => onSelectCategory(item)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default PopupWindow;
