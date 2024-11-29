export default function Chip(theme) {
    return {
        MuiChip: {
            variants: [
                {
                    props: { variant: 'tag' },
                    style: {
                        fontWeight: 300,
                        color: theme.palette.background.paper,
                        backgroundColor: theme.palette.primary.main,
                        textTransform: 'capitalize',
                    },
                },
            ],
        },
    };
}
