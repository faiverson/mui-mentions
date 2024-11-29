export default function MuiCssBaseline(theme) {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarColor: `${theme.palette.background.default} ${theme.palette.background.paper}`,
                    '& body': { overflow: 'overlay' },
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        background: 'transparent',
                        width: '11px',
                        height: '11px',
                    },
                    '&::-webkit-scrollbar-thumb:vertical, & *::-webkit-scrollbar-thumb:vertical': {
                        borderRadius: theme.shape.borderRadius,
                        background: `linear-gradient(to left, ${theme.palette.grey[600]}, ${theme.palette.grey[500]})`,
                        ...theme.applyStyles('dark', {
                            background: `linear-gradient(to left, ${theme.palette.grey[500]}, ${theme.palette.grey[400]})`,
                        }),
                        minHeight: '30px',
                        border: `1px solid ${theme.palette.grey[500]}`,
                    },
                    '&::-webkit-scrollbar-thumb:horizontal, & *::-webkit-scrollbar-thumb:horizontal': {
                        borderRadius: theme.shape.borderRadius,
                        background: `linear-gradient(to top, ${theme.palette.grey[500]}, ${theme.palette.grey[400]})`,
                        ...theme.applyStyles('dark', {
                            background: `linear-gradient(to top, ${theme.palette.grey[600]}, ${theme.palette.grey[500]})`,
                        }),
                        border: `1px solid ${theme.palette.grey[500]}`,
                    },
                    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                        backgroundColor: theme.palette.secondary.dark,
                    },
                    '-webkit-scrollbar-thumb:vertical:active': {
                        backgroundColor: theme.palette.error.main,
                    },
                    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: theme.palette.secondary.light,
                    },
                    '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                    },
                    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
    };
}
