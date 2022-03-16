import { VFC } from 'react';
import { Box } from '@mui/material';
import { useContactServices } from './_services';
import { AnimatedPage } from '@nx-portafolio/ui';

export const ContactView: VFC = (props): JSX.Element => {
  const {} = useContactServices();

  return (
    <AnimatedPage>
      <Box>Contact</Box>
    </AnimatedPage>
  );
};

export default ContactView;
