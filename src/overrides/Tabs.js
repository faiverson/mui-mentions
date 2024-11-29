import { alpha } from '@mui/material';

export default function Tabs(theme) {
    return {
        MuiTabs: {
            variants: [
                {
                    props: { variant: 'scrollable', type: 'outlined' },
                    style: {
                        '& .MuiTabs-indicator': {
                            display: 'none',
                        },
                        '& .MuiButtonBase-root:first-of-type': {
                            borderLeft: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: theme.spacing(1, 0, 0, 0),
                        },
                        '& .MuiButtonBase-root:last-child': {
                            borderRadius: theme.spacing(0, 1, 0, 0),
                        },
                        '& .MuiButtonBase-root': {
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderLeft: 'none',
                            borderBottom: 'none',
                            color: theme.palette.primary.main,
                            fontSize: '0.85em',
                            padding: theme.spacing(1, 2),
                        },
                        '& .MuiButtonBase-root.Mui-selected': {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.background.paper,
                        },
                        '& .MuiButtonBase-root:not(.Mui-selected):hover': {
                            backgroundColor: alpha(theme.palette.primary.main, 0.2),
                        },
                    },
                },
            ],
        },
    };
}
