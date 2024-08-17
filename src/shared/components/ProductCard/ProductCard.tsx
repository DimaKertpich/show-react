import { FC } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Stack } from '@mui/material';
import { Product } from '../../types';
import '../../styles/main.scss';

// TODO: Move to sheard
type ProductCardProps = {
  product: Product;
};

const getDirectImageUrl = (url: string): string => {
  const fileIdMatch = url.match(/file\/d\/(.+?)\/view/);
  return fileIdMatch ? `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w1000` : url;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = product.price - product.price * product.discount;

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="640"
          image={getDirectImageUrl(product.images[0])}
          alt={product.productName}
        />
        {product.discount > 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              backgroundColor: 'red',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '4px',
            }}
          >
            {`${(product.discount * 100).toFixed(0)}% OFF`}
          </Box>
        )}
      </Box>
      <CardContent>
        <Typography className="montserratRegular" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Stack direction={'row'} spacing={1}>
          {product.discount === 0 ? null : (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: 'line-through', marginRight: '0' }}
            >
              {product.price.toFixed(2)}
            </Typography>
          )}

          <Typography color="text.primary" component="span">
            {discountedPrice.toFixed(2)}грн
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
