export default function DatePicker(theme) {
    return {
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: theme.palette.background.paper,
                    },
                },
            },
        },
    };
}
