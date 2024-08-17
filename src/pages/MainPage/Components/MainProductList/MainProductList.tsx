import { FC } from 'react';
import { Grid, Typography, CircularProgress, Stack } from '@mui/material';
import ProductCard from '../../../../shared/components/ProductCard/ProductCard';
import { useTranslation } from 'react-i18next';
import { MainProductListProps } from './MainProductListProps';

const MainProductList: FC<MainProductListProps> = ({ products, isLoading }) => {
  const { t } = useTranslation();

  return isLoading ? (
    <CircularProgress sx={{ margin: '0 auto', p: '30px 0px' }} />
  ) : (
    <Stack>
      <Typography variant="h4" gutterBottom>
        {t('MainProductList.title')}
      </Typography>
      <Grid container spacing={1}>
        {products?.map((product) => (
          <Grid item key={product.id} xs={6} sm={4} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default MainProductList;
