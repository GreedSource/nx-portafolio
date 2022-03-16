import { VFC } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { DarkTheme } from '@nx-portafolio/ui';
/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

interface NxWelcomeProps {
  title?: string;
}

export const NxWelcome: VFC<NxWelcomeProps> = (props) => {
  return <h1>{props.title}</h1>;
};

export default NxWelcome;
