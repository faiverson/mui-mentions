export default function InputLabel(theme) {
    return {
        MuiInputLabel: {
            styleOverrides: {
                outlined: {
                    '&.MuiInputLabel-shrink': {
                        background: theme.palette.background.paper,
                        padding: '0 8px',
                        marginLeft: -6,
                        lineHeight: '1.4375em',
                    },
                },
            },
        },
    };
}
