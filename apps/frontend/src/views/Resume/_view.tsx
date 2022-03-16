import { VFC } from 'react';
import { Box } from '@mui/material';
import { useResumeServices } from './_services';
import { AnimatedPage } from '@nx-portafolio/ui';

export const ResumeView: VFC = (props): JSX.Element => {
  const {} = useResumeServices();
  return (
    <AnimatedPage>
      <Box>Resume</Box>
    </AnimatedPage>
  );
};

export default ResumeView;
