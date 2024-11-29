import {
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material';
import { useMemo, useState } from 'react';



import componentsOverride from './overrides';
import Palette from './palette';
import CustomShadows from './shadows';
import Demo from './Demo';
import DemoCard from './DemoCard';

const App = () => {
  const [colorMode] = useState('light');
  const theme = Palette(colorMode);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);
  const themeOptions = useMemo(
    () => ({
        cssVariables: true,
        breakpoints: {
            values: {
                xs: 0,
                sm: 768,
                md: 1024,
                lg: 1266,
                xl: 1536,
            },
        },
        direction: 'ltr',
        mixins: {
            toolbar: {
                minHeight: 60,
                paddingTop: 8,
                paddingBottom: 8,
            },
        },
        palette: theme.palette,
        customShadows: themeCustomShadows,
        zIndex: {
            notification: 1400,
            draggable: 5000,
        },
    }),
    [theme, themeCustomShadows],
);

const themes = createTheme(themeOptions);
themes.components = componentsOverride(themes);

    return (
      <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
          <CssBaseline />
          <Demo />
          <DemoCard />

            </ThemeProvider>
        </StyledEngineProvider>
    );
};
export default App
