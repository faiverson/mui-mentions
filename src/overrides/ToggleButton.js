// Material-UI
import { alpha } from '@mui/material/styles';

import useDarkMode from 'hooks/useDarkMode';

export default function ToggleButton(theme) {
    const darkMode = useDarkMode();

    return {
        MuiToggleButton: {
            variants: [
                {
                    props: { color: 'primary' },
                    style: {
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        ':hover': {
                            backgroundColor: `${alpha(theme.palette.primary.main, 0.25)}`,
                        },
                        '&.Mui-selected': {
                            opacity: 1,
                            color: darkMode ? theme.palette.common.black : theme.palette.background.paper,
                            backgroundColor: theme.palette.primary.main,
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.primary.main,
                        },
                    },
                },
            ],
        },
    };
}
