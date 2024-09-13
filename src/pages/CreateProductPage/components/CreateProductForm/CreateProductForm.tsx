import { FC } from 'react';
import { Field, Form, useFormikContext } from 'formik';
import { Button, Grid, IconButton, MenuItem, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProductForCreate } from '../../../../shared/types';
import TextFormField from '../../../../shared/components/TextFormField';
import SelectFormField from '../../../../shared/components/SelectFormField';

const CreateProductForm: FC = () => {
  const { values, dirty, setFieldValue } = useFormikContext<ProductForCreate>();

  // Handlers for sizes
  const handleAddSize = () => {
    setFieldValue('sizes', [...values.sizes, { sizeName: '', stockQuantity: 0 }]);
  };

  const handleRemoveSize = (index: number) => {
    const updatedSizes = [...values.sizes];
    updatedSizes.splice(index, 1);
    setFieldValue('sizes', updatedSizes);
  };

  // Handlers for images
  const handleAddImage = () => {
    setFieldValue('images', [...values.images, { href: '' }]);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...values.images];
    updatedImages.splice(index, 1);
    setFieldValue('images', updatedImages);
  };

  return (
    <Stack alignItems={'center'} sx={{ pt: '120px' }}>
      <Form>
        <Stack sx={{ mb: '20px' }} textAlign={'center'}>
          <Typography sx={{ fontSize: '22px' }}>Create Product</Typography>
        </Stack>

        <Grid container direction={'column'} rowSpacing={3} spacing={1}>
          <Grid item xs={6} sx={{ marginTop: '10px' }}>
            <Field
              name="productName"
              component={TextFormField}
              styles={{ width: '800px' }}
              placeholder="Product Name"
              hiddenLabel
            />
          </Grid>

          <Grid item xs={6}>
            <Field
              name="description"
              component={TextFormField}
              styles={{ width: '800px' }}
              placeholder="Description"
              hiddenLabel
            />
          </Grid>

          <Grid item xs={12}>
            <Field sx={{ width: '800px' }} name={`category`} component={SelectFormField} placeholder="Category">
              <MenuItem value="Hoodies">Hoodies</MenuItem>
              <MenuItem value="Pants">Pants</MenuItem>
              <MenuItem value="Shirts">Shirts</MenuItem>
              <MenuItem value="Jackets">Jackets</MenuItem>
              <MenuItem value="TShirts">TShirts</MenuItem>
              <MenuItem value="Accessories">Accessories</MenuItem>
            </Field>
          </Grid>

          <Grid item>
            <Stack justifyContent={'space-between'} direction={'row'} sx={{ width: '100%' }}>
              <Field styles={{ width: '360px' }} name="price" component={TextFormField} placeholder="0" label="Price" />
              <Field
                styles={{ width: '360px' }}
                name="discount"
                component={TextFormField}
                placeholder="0"
                label="Discount"
              />
            </Stack>
          </Grid>

          {values.sizes.map((size, index) => (
            <Grid item xs={12} container key={index}>
              <Stack justifyContent={'space-between'} direction={'row'} sx={{ width: '100%' }}>
                <Field
                  sx={{ width: '360px' }}
                  name={`sizes[${index}].sizeName`}
                  component={SelectFormField}
                  placeholder="Size"
                >
                  <MenuItem value="S">S</MenuItem>
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                  <MenuItem value="XL">XL</MenuItem>
                  <MenuItem value="XXL">XXL</MenuItem>
                </Field>

                <Field
                  name={`sizes[${index}].stockQuantity`}
                  label="Stock Quantity"
                  component={TextFormField}
                  placeholder="0"
                />

                <IconButton sx={{ width: '60px' }} onClick={() => handleRemoveSize(index)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Grid>
          ))}

          <Grid item xs={12} sx={{ marginTop: '15px' }}>
            <Stack>
              <Button
                sx={{ '&:hover': { color: '#2F95FB' }, background: '#2F95FB', color: '#fff' }}
                variant="outlined"
                onClick={handleAddSize}
              >
                Add Size
              </Button>
            </Stack>
          </Grid>

          {values.images.map((image, index) => (
            <Grid item container alignItems="center" key={index}>
              <Stack sx={{ width: '100%' }} textAlign={'center'} direction={'row'} justifyContent={'space-between'}>
                <Field
                  styles={{ width: '660px' }}
                  name={`images[${index}].href`}
                  component={TextFormField}
                  placeholder="Image URL"
                  label={`Image ${index + 1}`}
                />

                <IconButton onClick={() => handleRemoveImage(index)} sx={{ marginTop: '8px' }} color="error">
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Grid>
          ))}

          <Grid item xs={12} sx={{ marginTop: '15px' }}>
            <Stack>
              <Button
                sx={{ '&:hover': { color: '#2F95FB' }, background: '#2F95FB', color: '#fff' }}
                variant="outlined"
                onClick={handleAddImage}
              >
                Add Image URL
              </Button>
            </Stack>
          </Grid>

          <Stack sx={{ m: '40px 0 40px 0' }}>
            <Button sx={{ fontSize: '18px' }} type="submit" disabled={!dirty}>
              Submit
            </Button>
          </Stack>
        </Grid>
      </Form>
    </Stack>
  );
};
export default CreateProductForm;
