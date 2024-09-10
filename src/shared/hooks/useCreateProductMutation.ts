import { useMutation } from '@tanstack/react-query';
import { ProductForCreate } from '../types';
import { useCookie } from 'react-use';

const postMutationCreateProduct = () => {
  const [userTokenCookie, setUserTokenCookie] = useCookie('userToken');

  const postCreateMutation = useMutation({
    mutationFn: async (productData: ProductForCreate) => {
      return fetch('http://localhost:9090/api/products/admin/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userTokenCookie}`,
        },
        body: JSON.stringify(productData),
      });
    },
  });

  return { postCreateMutation };
};
export default postMutationCreateProduct;
