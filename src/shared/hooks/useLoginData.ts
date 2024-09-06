import { useMutation } from '@tanstack/react-query';
import { UserFormLogin } from '../types';

const useLoginData = () => {
  const postLoginMutation = useMutation({
    mutationFn: async (userData: UserFormLogin) => {
      return fetch('http://localhost:9090/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
    },
  });

  return { postLoginMutation };
};

export default useLoginData;
