import { createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

// Material-UI

const Palette = (theme) => {
    const [colorMode, setColorMode] = useState(theme);

    useEffect(() => {
        setColorMode(theme);
    }, [theme]);

    const greyColors = {
        0: '#FFFFFF',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
    };

    return createTheme({
        palette: {
            mode: colorMode,
            development: '#FFB600',
            test: '#f8aaaf',
            qa: '#66e2ff',

            primary: {
                light: '#32EBC3',
                main: '#0C9592',
                dark: '#074444',
            },
            secondary: {
                light: '#69E657',
                main: '#32C01D',
                dark: '#238514',
            },
            error: {
                lightest: '#fde3e4',
                lighter: '#f8aaaf',
                light: '#f4717a',
                main: '#EF3340',
                dark: '#da111f',
                darker: '#a10d17',
                darkest: '#68080f',
            },
            warning: {
                lightest: '#ffebb8',
                lighter: '#ffd97a',
                light: '#ffc83d',
                main: '#FFB600',
                dark: '#c28a00',
                darker: '#855f00',
                darkest: '#473300',
            },
            info: {
                lightest: '#a3eeff',
                lighter: '#66e2ff',
                light: '#29d7ff',
                main: '#00B3DC',
                dark: '#008dad',
                darker: '#005b70',
                darkest: '#002933',
            },
            success: {
                lightest: '#d5f2b0',
                lighter: '#b9e97c',
                light: '#9de048',
                main: '#78BE20',
                dark: '#5e9419',
                darker: '#3d6010',
                darkest: '#1c2c07',
            },
            common: {
                black: '#000',
            },
            contrastThreshold: 4.5,
            ...(colorMode === 'light'
                ? {
                      text: {
                          primary: '#212121',
                          secondary: '#666666',
                          disabled: '#9E9E9E',
                          dark: '#212121',
                          light: '#DEDEDE',
                      },
                      placeholder: greyColors[400],
                      divider: greyColors[400],
                      background: {
                          paper: greyColors[0],
                          default: greyColors[200],
                      },
                  }
                : {
                      text: {
                          primary: '#DEDEDE',
                          secondary: '#999999',
                          disabled: '#616161',
                          dark: '#212121',
                          light: '#DEDEDE',
                      },
                      placeholder: greyColors[500],
                      divider: greyColors[600],
                      background: {
                          paper: greyColors[800],
                          default: greyColors[700],
                      },
                  }),
        },
    });
};

export default Palette;
