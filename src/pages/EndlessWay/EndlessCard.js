import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FlagIcon from '@mui/icons-material/Flag';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AodSharpIcon from '@mui/icons-material/AodSharp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlightSharpIcon from '@mui/icons-material/FlightSharp';
import BedroomChildSharpIcon from '@mui/icons-material/BedroomChildSharp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import last1 from '../../images/last1.jpeg';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function EndlessCard() {
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" marginBottom="1rem">
                <Card sx={{ width: 260, height: 200, background: '#f3f3f3',m:2,mt:0,borderRadius:2,mb:.8 }}>
                    <CardContent >
                        <FlagIcon  sx={{mt:2,color:'blue'}} />
                        <Typography variant="h5" sx={{mt:2,mb:3}} component="div">
                            Product roadmap
                        </Typography>

                        <Button size="small">Get template <ArrowForwardIcon /></Button>
                    </CardContent>
                </Card>
                <Card sx={{ width: 260, height: 200, background: '#f3f3f3' ,m:2,mt:0,borderRadius:2  ,mb:.8}}>
                    <CardContent><Box sx={{mt:-2,ml:-2.2}}>
                    <img src={last1}/></Box>
                        <Typography variant="h5" sx={{mt:2,mb:3}} component="div">
                            OKRs
                        </Typography>

                        <Button size="small">Get template <ArrowForwardIcon /></Button>
                    </CardContent>
                </Card>
            </Box>
            <Box display="flex" justifyContent="space-between" marginBottom="1rem">
                <Card sx={{ width: 260, height: 200, background: '#f3f3f3',m:2,mt:0 ,borderRadius:2 ,mb:.8 }}>
                    <CardContent>
                        <AodSharpIcon  sx={{mt:2,color:'#F5A300'}}/>
                        <Typography variant="h5" sx={{mt:2,mb:3}} component="div">
                            Meeting notes
                        </Typography>

                        <Button size="small">Get template <ArrowForwardIcon /></Button>
                    </CardContent>
                </Card>
                <Card sx={{ width: 260, height: 200, background: '#f3f3f3',m:2,mt:0 ,borderRadius:2 ,mb:.8}}>
                    <CardContent>
                        <FlightSharpIcon sx={{mt:2,color:'red '}} />
                        <Typography variant="h5" sx={{mt:2,mb:3}} component="div">
                            Vacation planner
                        </Typography>

                        <Button size="small">Get template <ArrowForwardIcon /></Button>
                    </CardContent>
                </Card>
            </Box>
            <Box display="flex" justifyContent="space-between" marginBottom="1rem">
                <Card sx={{ width: 260, height: 200, background: '#f3f3f3',m:2,mt:0 ,borderRadius:2  }}>
                    <CardContent>
                        <CalendarMonthIcon  sx={{mt:2,color:'#2A9D99'}}/>
                        <Typography variant="h5" sx={{mt:2,mb:3}} component="div">
                            Editorial calendar
                        </Typography>

                        <Button size="small">Get template <ArrowForwardIcon /></Button>
                    </CardContent>
                </Card>
                <Card sx={{ width: 260, height: 200, background: '#f3f3f3',m:2,mt:0 ,borderRadius:2  }}>
                    <CardContent>
                        <BedroomChildSharpIcon  sx={{mt:2,color:'#9D34DA'}}/>
                        <Typography variant="h5" sx={{mt:2,mb:3}} component="div">
                            Habit tracker
                        </Typography>

                        <Button size="small">Get template <ArrowForwardIcon /></Button>
                    </CardContent>
                </Card>
            </Box>
        </Box >
    );
}
