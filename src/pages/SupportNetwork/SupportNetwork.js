import { Box } from '@mui/system';
import React from 'react';
import { communityIcon, welcomeNotion } from '../../images/images';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
const SupportNetwork = () => {
    return (
        <Box>
            <Box width="50  %" margin="auto" display="flex" justifyContent="space-between" marginTop="2rem">

                <Box bgcolor="#f3f3f3" width="45%" textAlign='left' borderRadius="10px" paddingTop="3rem" sx={{ml:25,mr:5,pb:2}}>
                    <Box marginLeft="2rem">
                        <h4><b>An always-on support network</b></h4>
                        <Typography>
                            Swap setups and share tips in over 149 online
                            </Typography> <Typography sx={{mb:6}}>
                             communities.
                             
                             </Typography>
                             <Box sx={{ml:7}}>
                        <img src={communityIcon} width="230px" /></Box></Box>
                </Box >
                <Box bgcolor="#f3f3f3" width="49%" borderRadius="10px" paddingTop="3rem"sx={{mr:25,pb:2}}        >
                    <Box marginLeft="3rem" textAlign="left">
                        <h4><b>Choose your language</b></h4>
                        <Typography> Notion currently supports English, Korean, Japanese,</Typography>
                        <Typography>French, German, Spanish, and Portuguese. With more to</Typography>
                        <Typography sx={{mb:6}}>come!</Typography>
                        <img src={welcomeNotion} width="438px" float="right" />
                    </Box >

                </Box>
            </Box>

        </Box >
    )
}

export default SupportNetwork