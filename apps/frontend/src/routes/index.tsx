import { FC } from 'react';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  HomeView,
  AboutView,
  ContactView,
  ResumeView,
} from 'apps/frontend/src/views';
import { AppBar } from '@nx-portafolio/ui';
import { Container, Box } from '@mui/material';

export const Routes: FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <>
      <AppBar />
      <Box
        sx={{
          m: '1rem',
        }}
      >
        <Container>
          <AnimatePresence exitBeforeEnter>
            <Switch key={location.pathname} location={location}>
              <Route path="/" element={<HomeView />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/contact" element={<ContactView />} />
              <Route path="/resume" element={<ResumeView />} />
            </Switch>
          </AnimatePresence>
        </Container>
      </Box>
    </>
  );
};

export default Routes;
