
import { MentionsTextField } from '@jackstenglein/mui-mentions';
import {
  Container,
  Stack,
  Typography,
} from '@mui/material';


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


const Demo = () => {

    return (
          <Container maxWidth="xs" fixed sx={{ py: 15 }}>
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
          </Container>
    );
};
export default Demo
