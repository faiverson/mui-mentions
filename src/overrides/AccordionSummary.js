export default function AccordionSummary(theme) {
    return {
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    '&.MuiAccordionSummary-root.Mui-expanded': {
                        minHeight: theme.spacing(6),
                    },
                    '& .MuiAccordionSummary-content.Mui-expanded': {
                        margin: theme.spacing(0),
                    },
                    '& .MuiAccordionSummary-expandIconWrapper': {
                        color: theme.palette.text.primary,
                    },
                },
            },
        },
    };
}
