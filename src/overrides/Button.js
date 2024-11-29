import useDarkMode from 'hooks/useDarkMode';

export default function Button(theme) {
    const darkMode = useDarkMode();
    const disabledStyle = {
        '&.Mui-disabled': {
            backgroundColor: darkMode ? theme.palette.grey[700] : theme.palette.grey[200],
        },
    };

    return {
        MuiButton: {
            variants: [
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
                    backgroundColor: theme.palette.grey[darkMode ? 700 : 200],
                },
                outlined: {
                    backgroundColor: 'transparent',
                    ...disabledStyle,
                },
                link: ({ ownerState }) => ({
                    color: theme.palette[ownerState?.color ?? 'primary'].main,
                    fontWeight: 400,
                    backgroundColor: 'transparent',
                    textTransform: 'capitalize',
                    padding: '0 0 0 0',
                    ':hover': {
                        textDecoration: 'underline',
                        backgroundColor: 'transparent',
                    },
                }),
                contained: ({ ownerState }) => ({
                    backgroundColor: theme.palette[ownerState?.color ?? 'primary'].main,
                    color: theme.palette.background.paper,
                    ...disabledStyle,
                }),
            },
        },
    };
}
