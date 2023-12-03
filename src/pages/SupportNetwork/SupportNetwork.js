import { Box } from '@mui/system';
import React from 'react';
import { communityIcon, welcomeNotion } from '../../images/images';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useTheme } from '@mui/material/styles';
const SupportNetwork = () => {
    return (
        <Box>
            <Box width="80%" margin="auto" display="flex" justifyContent="space-between" marginTop="2rem">

                <Box bgcolor="#f3f3f3" width="49%" textAlign='left' borderRadius="10px" paddingTop="3rem">
                    <Box marginLeft="3rem">
                        <h3>An always-on support network</h3>
                        <p>
                            Swap setups and share tips in over 149 online communities.
                        </p>
                        <img src={communityIcon} width="230px" /></Box>
                </Box >
                <Box bgcolor="#f3f3f3" width="49%" borderRadius="10px" paddingTop="3rem"
                >
                    <Box marginLeft="3rem" textAlign="left">
                        <h3>Choose your language</h3>
                        <p>
                            Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!</p>
                        <img src={welcomeNotion} width="438px" float="right" />
                    </Box >

                </Box>
            </Box>

        </Box >
    )
}

export default SupportNetwork