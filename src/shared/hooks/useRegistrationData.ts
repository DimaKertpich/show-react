import { useMutation } from '@tanstack/react-query';
import { UserFormRegistration } from '../types';

const useRegistrationData = () => {
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
  });

  return { postRegistrationMutation };
};
export default useRegistrationData;
