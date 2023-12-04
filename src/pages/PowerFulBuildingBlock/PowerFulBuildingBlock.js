import { Typography } from '@mui/material'
import { Box ,Stack } from '@mui/system'
import React from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SwipeableTextMobileStepper from '../Carousel/Carousel';
import a16 from '../../images/a16.jpeg'
import a16a from '../../images/a16(1).jpeg'

const PowerFulBuildingBlock = () => {
    return (
        <Box sx={{mr:10,ml:10,mb:3}}>
            <Stack direction='row' sx={{ml:20 , mt:-10}}>
                <img
                    src={a16}
                    alt={" "}
                    loading="lazy"/>
                <Typography variant="h3" sx={{ fontWeight: "bold" ,mt:15, ml:3}}>Powerful building blocks</Typography>
            </Stack>
            <Box bgcolor="#f3f3f3" paddingLeft="3rem" paddingTop="2rem" width="80%" margin="auto" height="50rem" borderRadius="10px"  textAlign="left" >
            <Box sx={{ml:-5,mt:-4}}>
            <img    
                    src={a16a}
                    width='385'
                    alt={" "}
                    loading="lazy"/>  </Box>  
            <ShuffleIcon color="primary" sx={{mb:1 }} />
            <Typography variant='h5' sx={{fontWeight:'bold',mb:1}}>Visualize, filter & sort any way you want</Typography>
            <Typography>Show only tasks assigned to you, or items marked as urgent. Break</Typography>
            <Typography sx={{mb:4}}>down any project in the way that’s most helpful to you.</Typography>
                <Box width="100%" margin="auto" sx={{}}>
                    <SwipeableTextMobileStepper /></Box></Box></Box>
    )
}

export default PowerFulBuildingBlock