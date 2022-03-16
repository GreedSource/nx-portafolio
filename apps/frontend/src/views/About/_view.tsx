import { VFC } from 'react';
import { Box } from '@mui/material';
import { useAboutServices } from './_services';
import { AnimatedPage } from '@nx-portafolio/ui';

export const AboutView: VFC = (props): JSX.Element => {
  const {} = useAboutServices();
  return (
    <AnimatedPage>
      <Box
        sx={{
          p: '2rem',
          backgroundColor: 'blue',
        }}
      >
        About
      </Box>
    </AnimatedPage>
  );
};

export default AboutView;
