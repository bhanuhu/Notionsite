import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function GlobalMovementCard(props) {
    const { heading, text } = props
    return (
        <Card sx={{ width: 340, background: '#f3f3f3', borderRadius: '.5rem' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h2" fontWeight="700" color="primary" component="div">
                        {heading}
                    </Typography>
                    <Typography marginTop="-9px">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default GlobalMovementCard