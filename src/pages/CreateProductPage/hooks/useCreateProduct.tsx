import { ProductForCreate } from '../../../shared/types';
import { RefObject, useCallback, useMemo, useRef } from 'react';
import { FormikProps } from 'formik';
import { FormikConfig } from 'formik/dist/types';
import { CreateProductPageResultProps } from '../CreateProductProps';
import postMutationCreateProduct from '../../../shared/hooks/useCreateProductMutation';

const useCreateProduct = (): CreateProductPageResultProps => {
  const formRef = useRef<FormikProps<ProductForCreate>>();
  const { postCreateMutation } = postMutationCreateProduct();

  const submitForm = useCallback(
    async (values: ProductForCreate) => {
      await postCreateMutation.mutateAsync(
        {
          productName: values.productName,
          description: values.description,
          price: values.price,
          discount: values.discount,
          category: values.category,
          sizes: values.sizes,
          images: values.images,
        },
        { onSuccess: (data) => console.log('SUCCESS', data) }
      );
    },
    [postCreateMutation]
  );

  const formProps = useMemo<FormikConfig<ProductForCreate>>(() => {
    return {
      enableReinitialize: true,
      initialValues: {
        productName: '',
        description: '',
        price: 0,
        discount: 0,
        category: '',
        sizes: [{ sizeName: '', stockQuantity: 0 }],
        images: [{ href: '' }],
      },
      onSubmit: submitForm,
      innerRef: formRef as RefObject<FormikProps<ProductForCreate>>,
      validateOnMount: false,
    };
  }, [submitForm]);

  return { formProps };
};

export default useCreateProduct;
