import { useMutation } from '@tanstack/react-query';
import { UserFormRegistration } from '../types';
import { RegistrationResponse } from '../types';
import { useCookie } from 'react-use';

const useRegistrationData = () => {
  const [userIdCookie, setUserIdCookie] = useCookie('userId');
  // <RegistrationResponse, Error, UserFormRegistration, unknown>
  // (userData: UserFormRegistration) =>

  // {
  //   onSuccess: (response: RegistrationResponse) => {
  //     setUserIdCookie(String(response.id));
  //   },

  // const mutation: UseMutationResult<POSTCreateResponse, Error, Product> = useMutation({
  //     mutationFn:
  //         async (newProduct: Product): Promise<POSTCreateResponse> => {
  //             const response: AxiosResponse<POSTCreateResponse> = await axios.post('http://localhost:9090/api/products/admin/create', newProduct,
  //                 {
  //                     headers: {
  //                         Authorization: Bearer ${token},
  //                     },
  //                 });
  //
  //             return response.data;
  //         },
  //     onSuccess: (data) => {
  //         console.log('Create post successful:', data);
  //     },
  //     onError: (error) => {
  //         console.error('Create post failed:', error);
  //     },
  // });

  const postRegistrationMutation = useMutation({
    mutationFn: async (userData: UserFormRegistration) => {
      return fetch('http://localhost:9090/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
    },
    onSuccess: (response) => setUserIdCookie(String(response.id)),
    onError: (error) => {
      console.error('Create post failed:', error);
    },
  });

  return { postRegistrationMutation, userIdCookie };
};
export default useRegistrationData;
