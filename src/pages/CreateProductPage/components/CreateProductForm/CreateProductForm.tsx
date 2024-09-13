import { FC } from 'react';
import { Field, Form, useFormikContext } from 'formik';
import { Button, Grid, IconButton, MenuItem } from '@mui/material';
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
    <Form>
      <Grid container rowSpacing={3} spacing={1}>
        <Grid item xs={12} sx={{ marginTop: '10px' }}>
          <Field
            sx={{ width: '720px' }}
            name="productName"
            component={TextFormField}
            placeholder="Product Name"
            hiddenLabel
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            sx={{ width: '720px' }}
            name="description"
            component={TextFormField}
            placeholder="Description"
            hiddenLabel
          />
        </Grid>

        <Grid item xs={12}>
          <Field sx={{ width: '720px' }} name={`category`} component={SelectFormField} placeholder="Category">
            <MenuItem value="Hoodies">Hoodies</MenuItem>
            <MenuItem value="Pants">Pants</MenuItem>
            <MenuItem value="Shirts">Shirts</MenuItem>
            <MenuItem value="Jackets">Jackets</MenuItem>
            <MenuItem value="TShirts">TShirts</MenuItem>
            <MenuItem value="Accessories">Accessories</MenuItem>
          </Field>
        </Grid>

        <Grid item xs={6}>
          <Field sx={{ width: '290px' }} name="price" component={TextFormField} placeholder="0" label="Price" />
        </Grid>

        <Grid item xs={6}>
          <Field sx={{ width: '290px' }} name="discount" component={TextFormField} placeholder="0" label="Discount" />
        </Grid>

        {values.sizes.map((size, index) => (
          <Grid item xs={12} container alignItems="center" key={index} spacing={2}>
            <Grid item xs={6}>
              <Field
                sx={{ width: '180px' }}
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
            </Grid>

            <Grid item xs={3}>
              <Field
                sx={{ width: '180px' }}
                name={`sizes[${index}].stockQuantity`}
                label="Stock Quantity"
                component={TextFormField}
                placeholder="0"
              />
            </Grid>

            <Grid item xs={3}>
              <IconButton onClick={() => handleRemoveSize(index)} color="error">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}

        <Grid item xs={12} sx={{ marginTop: '15px' }}>
          <Button variant="outlined" onClick={handleAddSize}>
            Add Size
          </Button>
        </Grid>

        {values.images.map((image, index) => (
          <Grid item xs={12} container alignItems="center" key={index} spacing={2}>
            <Grid item xs={12}>
              <Field
                sx={{ width: '682px' }}
                name={`images[${index}].href`}
                component={TextFormField}
                placeholder="Image URL"
                label={`Image ${index + 1}`}
              />

              <IconButton onClick={() => handleRemoveImage(index)} sx={{ marginTop: '8px' }} color="error">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}

        <Grid item xs={12} sx={{ marginTop: '15px' }}>
          <Button variant="outlined" onClick={handleAddImage}>
            Add Image URL
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" disabled={!dirty}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};
export default CreateProductForm;
