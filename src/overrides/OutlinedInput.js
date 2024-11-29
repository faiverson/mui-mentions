// Material-UI
import { alpha } from '@mui/material/styles';

export default function OutlinedInput(theme) {
    return {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.light,
                    },
                    '&.Mui-focused': {
                        boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: `1px solid ${theme.palette.primary.light}`,
                        },
                    },
                    '&.Mui-error': {
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.error.light,
                        },
                        '&.Mui-focused': {
                            boxShadow: `0 0 0 2px ${alpha(theme.palette.error.main, 0.2)}`,
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: `1px solid ${theme.palette.error.light}`,
                            },
                        },
                    },
                },

                inputMultiline: {
                    padding: 0,
                },
            },
        },
    };
}
