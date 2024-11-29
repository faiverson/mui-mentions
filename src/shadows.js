// Material-UI
import { alpha } from '@mui/material/styles';

const CustomShadows = (theme) => ({
    button: '0 2px #0000000b',
    text: '0 -1px 0 rgb(0 0 0 / 12%)',
    z1: `0px 2px 8px ${alpha(theme.palette.grey[900], 0.15)}`,
    z2: `0px 4px 8px ${alpha(theme.palette.grey[900], 0.15)}`,
    z3: `0px 8px 12px ${alpha(theme.palette.grey[900], 0.15)}`,
    z4: `0px 12px 16px ${alpha(theme.palette.grey[900], 0.15)}`,
    z5: `0px 16px 20px ${alpha(theme.palette.grey[900], 0.15)}`,
});

export default CustomShadows;
