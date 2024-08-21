import { FC, ReactNode, useEffect, useRef } from 'react';
import { CircularProgress, Stack } from '@mui/material';
import { useIntersection } from 'react-use';

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
    threshold: 0.1,
  });
  useEffect(() => {
    if (intersection && callback) callback();
  }, [intersection, callback]);

  return (
    <Stack>
      {children}
      <Stack alignItems="center" justifyContent="center" ref={loaderRef}>
        {isLoading && <CircularProgress />}
      </Stack>
    </Stack>
  );
};
export default InfiniteScroll;
