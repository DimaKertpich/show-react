import { useMutation } from '@tanstack/react-query';
import { UserFormLogin } from '../types';

const useLoginData = () => {
  const postLoginMutation = useMutation({
    mutationFn: async (userData: UserFormLogin) => {
      const response = await fetch('http://localhost:9090/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      return data;
    },
  });

  return { postLoginMutation };
};

export default useLoginData;
