import { useMutation } from '@tanstack/react-query';
import { UserFormRegistration } from '../types';
import { RegistrationResponse } from '../types';
import { useCookie } from 'react-use';

const useRegistrationData = () => {
  const [userIdCookie, setUserIdCookie] = useCookie('userId');

  const postRegistrationMutation = useMutation<RegistrationResponse, Error, UserFormRegistration, unknown>(
    async (userData: UserFormRegistration) => {
      return fetch('http://localhost:9090/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
    },
    {
      onSuccess: (response: RegistrationResponse) => {
        setUserIdCookie(String(response.id));
      },
    }
  );

  return { postRegistrationMutation, userIdCookie };
};
export default useRegistrationData;
