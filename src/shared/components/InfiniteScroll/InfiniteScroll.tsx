import { FC, ReactNode, useRef } from 'react';
import { CircularProgress, Stack } from '@mui/material';
import { useIntersection, useUpdateEffect } from 'react-use';

type Props = {
  children?: ReactNode;
  callback: () => void;
  isLoading: boolean;
};
const InfiniteScroll: FC<Props> = ({ children, callback, isLoading }) => {
  const loaderRef = useRef(null);
  const intersection = useIntersection(loaderRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  useUpdateEffect(() => {
    if (intersection?.isIntersecting && callback) {
      callback();
    }
  }, [intersection]);

  return (
    <Stack>
      {children}
      <Stack alignItems="center" justifyContent="center" ref={loaderRef} sx={{ height: '50px', marginTop: '20px' }}>
        {isLoading && <CircularProgress />}
      </Stack>
    </Stack>
  );
};
export default InfiniteScroll;
