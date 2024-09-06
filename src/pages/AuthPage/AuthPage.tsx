import { FC } from 'react';
import Registration from './Registration';
import { Stack } from '@mui/material';
import Login from './Login';

const AuthPage: FC = () => {
  return (
    <Stack
      sx={{
        width: '360px',
        background: 'white',
        height: '100vh',
        position: 'fixed',
        top: '0',
        right: '0',
        zIndex: '1200',
        p: '60px 30px',
        boxSizing: 'border-box',
      }}
    >
      {/* <Registration /> */}
      <Login />
    </Stack>
  );
};

export default AuthPage;
