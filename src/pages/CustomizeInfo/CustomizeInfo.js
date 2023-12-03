import { Box, flexbox } from '@mui/system'
import React from 'react'
import { buildanypage, customizeinfo, matchGrup } from '../../images/images'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
const CustomizeInfo = () => {
    const theme = useTheme();
    return (
        <Box>
            <Box width="80%" margin="auto" display="flex" justifyContent="space-between" marginTop="2rem">

                <Box bgcolor="#f3f3f3" width="49%" textAlign='left' borderRadius="10px" paddingTop="3rem">
                    <Box marginLeft="3rem"> <RemoveRedEyeIcon color='primary' />
                        <h3>Customize the info you track</h3>
                        <p>
                            Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.
                        </p>
                        <img src={customizeinfo} width="438px" float="right" /></Box>
                </Box >
                <Box bgcolor="#f3f3f3" width="49%" borderRadius="10px" paddingTop="3rem"
                >
                    <Box marginLeft="3rem" textAlign="left"> <ColorLensIcon color='primary' />
                        <h3>Build any page, communicate any idea</h3>
                        <p>
                            Everything is drag and drop in Notion — images, toggles, to-do’s, even embedded databases. </p>
                        <img src={buildanypage} width="438px" float="right" />
                    </Box >

                </Box>
            </Box>
            <Box width="45%" margin="auto">
                <Typography fontSize="30px">"Notion adapts to your needs. It’s as minimal or as powerful as you need it to be."</Typography>

                <Card sx={{ display: 'flex', justifyContent: "center" }}>

                    <CardMedia
                        component="img"
                        sx={{ width: 30, height: 35, marginTop: 2 }}
                        image={matchGrup}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="p" fontWeight="bold">
                                Rahim Makani
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Director of Product, Matchgroup
                            </Typography>
                        </CardContent>

                    </Box>
                </Card>
            </Box>
        </Box >
    )
}

export default CustomizeInfo