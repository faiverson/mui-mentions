
import { MentionsTextField } from '@jackstenglein/mui-mentions';
import {
  Card,
  Container,
  CardContent,
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


const DemoCard = () => {

    return (
      <Container maxWidth="xs" fixed sx={{ py: 15 }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
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
      </CardContent>



            </Card>
            </Container>
    );
};
export default DemoCard
