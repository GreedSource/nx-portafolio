import { VFC } from 'react';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { DarkTheme, LightTheme } from '@nx-portafolio/ui';
import { Routes } from 'apps/frontend/src/routes';
import { BrowserRouter } from 'react-router-dom';

export const App: VFC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = prefersDarkMode ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
