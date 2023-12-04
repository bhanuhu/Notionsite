import React from 'react'
import EndlessCard from './EndlessCard'
import { Box ,Stack} from '@mui/system'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Typography } from '@mui/material';
import { companyWiki } from '../../images/images';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import last from '../../images/last.jpeg';
import last1 from '../../images/last1.jpeg';
 
const EndlessWay = () => {
    return (
        <Box width="90%" display="flex" justifyContent="space-around" margin="auto" marginTop="3rem" >
       
        <Stack> <Stack direction='row'>
        <Box>
        <Box>
        <Typography variant='h2' sx={{fontWeight:'bold  '}}>Endless ways to use it</Typography>
        </Box>
        <Box sx={{mt:1,mb:2}}>
        <Button>Browse all templates<ArrowForwardIcon></ArrowForwardIcon></Button>
        </Box>
        </Box>
        <Box sx={{ml:15}}>
        <img src={last} /></Box>
        </Stack>
        <Stack direction='row'>
            <Box sx={{pr:2 ,mr:4}} borderRadius="10px" width="49%" backgroundColor="#f3f3f3" height="40rem" display="flex" flexDirection="column" alignItems="flex-start" paddingLeft="2rem" paddingTop="3rem">
                
            <HomeIcon sx={{color:'red'}}/>
                <Typography variant='h5' sx={{mt:2}}>Company wiki</Typography>
                    
                
                <Button sx={{mt:1}}>Get template →</Button>
                <Box sx={{mr:2,mt:8,mr:-1.5}}>
                    <img src={companyWiki} width="400px" height="400px" />
                </Box>

            </Box>
            <Box>
                <EndlessCard />
            </Box>
            </Stack>
            </Stack>
        </Box >
    )
}

export default EndlessWay