import { FC } from 'react';
import { Grid, Typography, CircularProgress, Stack, Button } from '@mui/material';
import ProductCard from '../../shared/components/CommonProductCard/ProductCard';
import { useTranslation } from 'react-i18next';
import { DiscountProductsListProps } from './DiscountProductsListProps';

const DiscountProductsList: FC<DiscountProductsListProps> = ({ products, isLoading, fetchNextPage }) => {
  const { t } = useTranslation();

  return isLoading ? (
    <CircularProgress sx={{ margin: '0 auto', p: '30px 0px' }} />
  ) : (
    <Stack
      sx={{
        pt: '80px',
        pb: '20px',
        px: 2,
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        {t('DiscountProductList.title')}
      </Typography>
      <Grid container spacing={1.5}>
        {products?.length ? (
          products.map((product) => (
            <Grid item key={product.id} xs={6} sm={4} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Typography>No products available</Typography>
        )}
      </Grid>
      <Button onClick={() => fetchNextPage()}>Load more</Button>
    </Stack>
  );
};

export default DiscountProductsList;
