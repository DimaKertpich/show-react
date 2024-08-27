import { FC } from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import ProductCard from '../../shared/components/ProductCard';
import { useTranslation } from 'react-i18next';
import { DiscountProductsListProps } from './DiscountProductsListProps';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const DiscountProductsList: FC<DiscountProductsListProps> = ({ products, isLoading, loadMore }) => {
  const { t } = useTranslation();

  return (
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
      <InfiniteScroll callback={loadMore} isLoading={isLoading}>
        <Grid container spacing={1.5}>
          {products?.length ? (
            products.map((product) => (
              <Grid item key={product.id} xs={6} sm={4} md={3}>
                <ProductCard product={product} />
              </Grid>
            ))
          ) : (
            <Typography sx={{ textAlign: 'center' }}>{t('Errors.NoAvailableProducts')}</Typography>
          )}
        </Grid>
      </InfiniteScroll>
    </Stack>
  );
};

export default DiscountProductsList;
