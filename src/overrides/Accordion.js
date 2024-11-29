export default function Accordion(theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    // override styles for AccordionCard variant card
                    '&.card': {
                        borderRadius: theme.spacing(1),
                    },
                    '&.card.MuiAccordion-root:before': {
                        left: theme.spacing(1),
                        right: theme.spacing(1),
                    },
                    '&.Mui-expanded.card.full-height': {
                        height: '100%',
                    },
                    '&.card .MuiAccordionSummary-root:hover': {
                        cursor: 'auto',
                    },
                    '&.card .MuiAccordionDetails-root': {
                        padding: theme.spacing(1, 0, 0, 0),
                    },
                    '&.card:first-of-type': {
                        borderRadius: theme.spacing(1),
                    },
                    '&.card:last-of-type': {
                        borderRadius: theme.spacing(1),
                    },

                    // override styles for AccordionCard variant card
                    '&.compact': {
                        border: `1px solid ${theme.palette.text.light}`,
                        borderRadius: theme.spacing(0.5),
                        boxShadow: '0px 0px 30px -15px rgba(0,0,0,0.18)',
                    },
                    '&.compact.MuiAccordion-root:before': {
                        left: theme.spacing(1),
                        right: theme.spacing(1),
                        height: 0,
                    },
                    '&.compact.Mui-expanded': {
                        margin: theme.spacing(0),
                    },
                    '&.compact .MuiAccordionSummary-root': {
                        minHeight: 0,
                        padding: theme.spacing(0.5),
                    },
                    '&.compact .MuiButtonBase-root.MuiAccordionSummary-root': {
                        minHeight: 0,
                    },
                    '&.compact .MuiAccordionSummary-content': {
                        minHeight: 0,
                        padding: theme.spacing(0),
                        margin: theme.spacing(0),
                    },
                    '&.compact .MuiButtonBase-root.MuiIconButton-root': {
                        padding: theme.spacing(0),
                    },
                    '&.compact .MuiAccordionSummary-expandIconWrapper': {
                        transform: 'rotate(270deg)',
                    },
                    '&.compact .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(0deg)',
                    },
                    '&.compact .MuiSvgIcon-root': {
                        width: '0.8em',
                        height: '0.8em',
                    },
                    '&.compact .MuiAccordionSummary-root:hover': {
                        cursor: 'auto',
                    },
                    '&.compact .MuiAccordionDetails-root': {
                        padding: theme.spacing(0),
                    },
                    '&.compact:first-of-type': {
                        borderRadius: theme.spacing(0.5),
                    },
                    '&.compact:last-of-type': {
                        borderRadius: theme.spacing(0.5),
                    },

                    // override for Accordion component
                    '&:first-of-type': {
                        borderTopLeftRadius: theme.spacing(1),
                        borderTopRightRadius: theme.spacing(1),
                    },
                },
            },
        },
    };
}
