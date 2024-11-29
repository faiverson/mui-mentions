
import { MentionsTextField } from '@jackstenglein/mui-mentions';
import {
  Container,
  CssBaseline,
  FormControlLabel,
  Stack,
  Switch,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
      mode: 'dark',
  },
});

const lightTheme = createTheme();

const defaultValue = 'Hello, @[Kaladin Stormblessed](kaladin)!';

const stormlight = [
   { id: 'kaladin', display: 'Kaladin Stormblessed' },
   { id: 'adolin', display: 'Adolin Kholin' },
   { id: 'shallan', display: 'Shallan Davar' },
   { id: 'dalinar', display: 'Dalinar Kholin' },
   { id: 'renarin', display: 'Renarin Kholin' },
   { id: 'syl', display: 'Syl' },
   { id: 'teft', display: 'Teft' },
   { id: 'hoid', display: 'Hoid' },
   { id: 'moash', display: 'Moash' },
   { id: 'sadeas', display: 'Torol Sadeas' },
   { id: 'amaram', display: 'Amaram' },
   { id: 'nohadon', display: 'Nohadon' },
];
const App = () => {
  const [mode, setMode] = useState('light');

    return (
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
          <CssBaseline />
          <Container maxWidth="xs" fixed sx={{ py: 15 }}>
                <Stack spacing={5}>
                    <Stack spacing={1}>
                        <Typography variant='h4'>@jackstenglein/mui-mentions demo</Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={mode === 'dark'}
                                    onChange={(e) => setMode(e.target.checked ? 'dark' : 'light')}
                                />
                            }
                            label='Dark Mode'
                        />
                    </Stack>
                    <Stack spacing={2.5}>
            <Stack spacing={0.5}>
                <Typography variant='h5'>Basic TextField</Typography>
                <Typography>
                    MentionsTextField supports all three variants of the Mui TextField: outlined (default), filled and
                    standard.
                </Typography>
            </Stack>

            <Stack direction='row' spacing={2}>
                <MentionsTextField
                    variant='outlined'
                    label='Outlined'
                    fullWidth
                    defaultValue={defaultValue}
                    dataSources={[
                        {
                            data: stormlight,
                        },
                    ]}
                />
            </Stack>
        </Stack>
            </Stack>
          </Container>
      </ThemeProvider>
    );
};
export default App
