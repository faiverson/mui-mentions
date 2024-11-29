import useDarkMode from 'hooks/useDarkMode';

export default function LoadingButton(theme) {
    const darkMode = useDarkMode();
    const disabledStyle = {
        '&.Mui-disabled': {
            backgroundColor: darkMode ? theme.palette.grey[700] : theme.palette.grey[200],
        },
    };

    return {
        '&.MuiButton.MuiLoadingButton': {
            variants: [
                {
                    props: { variant: 'link' },
                    style: {
                        fontWeight: 400,
                        color: theme.palette.primary.main,
                        backgroundColor: 'transparent',
                        textTransform: 'capitalize',
                        padding: '0 0 0 0',
                        ':hover': {
                            textDecoration: 'underline',
                            backgroundColor: 'transparent',
                        },
                    },
                },
                {
                    props: { variant: 'link', color: 'common' },
                    style: {
                        color: theme.palette.grey[600],
                        ':hover': {
                            color: theme.palette.grey[800],
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    backgroundColor: darkMode ? theme.palette.grey[700] : theme.palette.grey[200],
                },
                contained: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.background.paper,
                    ...disabledStyle,
                },
                outlined: {
                    backgroundColor: 'transparent',
                    ...disabledStyle,
                },
            },
        },
    };
}
