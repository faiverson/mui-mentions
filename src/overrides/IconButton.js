import useDarkMode from 'hooks/useDarkMode';

export default function IconButton(theme) {
    const darkMode = useDarkMode();
    return {
        MuiIconButton: {
            variants: [
                {
                    props: { variant: 'compact' },
                    style: {
                        boxShadow: 'none', // Remove any box shadow
                        '&:hover': {
                            boxShadow: 'none', // Remove the shadow on hover
                            backgroundColor: 'transparent', // Ensure no background color change if desired
                        },
                        '&:focusVisible': {
                            boxShadow: 'none', // Remove the shadow on focus
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    ':hover': {
                        backgroundColor: darkMode ? theme.palette.grey[600] : theme.palette.grey[300],
                    },
                },
                sizeLarge: {
                    fontSize: '1.25rem',
                },
                sizeMedium: {
                    fontSize: '1rem',
                },
                sizeSmall: {
                    fontSize: '0.75rem',
                },
            },
        },
    };
}
