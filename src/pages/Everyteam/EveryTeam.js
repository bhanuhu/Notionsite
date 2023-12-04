import { Box, Typography,Stack } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import Carousel2 from '../Carousel/Carousel2'
import PaletteIcon from '@mui/icons-material/Palette';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ExtensionIcon from '@mui/icons-material/Extension';
const EveryTeam = () => {
    return (
        <Box marginTop="6rem" >
            <Typography variant='h2' sx={{mb:2, fontWeight:'bold'}}>Every team, side-by-side</Typography>
            <Stack direction='row'sx={{ml:45 }}>
            <Button variant="contained" sx={{m:1,bgcolor:'#FFFFFF',borderRadius:3}}><Stack sx={{color:'black'}}><ConstructionOutlinedIcon  sx={{fontSize:100,color:'black'}}/>Engineering</Stack></Button>
            <Button variant="contained" sx={{m:1,bgcolor:'#FFFFFF',borderRadius:3}}><Stack sx={{color:'black'}}><PaletteIcon  sx={{fontSize:100,color:'black'}}/>Design</Stack></Button>
            <Button variant="contained" sx={{m:1,bgcolor:'#FFFFFF',borderRadius:3}}><Stack sx={{color:'black'}}><RocketLaunchOutlinedIcon  sx={{fontSize:100,color:'black'}}/>Product</Stack></Button>
            <Button variant="contained" sx={{m:1,bgcolor:'#FFFFFF',borderRadius:3}}><Stack sx={{color:'black'}}><CampaignIcon  sx={{fontSize:100,color:'black'}}/>Marketing</Stack></Button>
            <Button variant="contained" sx={{m:1,bgcolor:'#FFFFFF',borderRadius:3}}><Stack sx={{color:'black'}}><ExploreOutlinedIcon  sx={{fontSize:100,color:'black'}}/>Operations</Stack></Button>
            <Button variant="contained" sx={{m:1,bgcolor:'#FFFFFF',borderRadius:3}}><Stack sx={{color:'black'}}><ExtensionIcon  sx={{fontSize:100,color:'black'}}/>HR</Stack></Button>
            </Stack>
            <Box sx={{ml:20}}>
        <Carousel2  />
        </Box>
        </Box>
    )
}

export default EveryTeam