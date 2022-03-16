import { VFC } from 'react';
import { Box } from '@mui/material';
import { useHomeServices } from './_services';
import { AnimatedPage } from '@nx-portafolio/ui';

export const HomeView: VFC = (props): JSX.Element => {
  const {} = useHomeServices();
  return (
    <AnimatedPage>
      <Box
        sx={{
          p: '2rem',
          backgroundColor: 'red',
        }}
      >
        Home
      </Box>
    </AnimatedPage>
  );
};

export default HomeView;
