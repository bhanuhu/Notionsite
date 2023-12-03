import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { avatars } from '../../images/images';
import GlobalMovementCard from './GlobalMovementCard';

const GlobalMovement = () => {
    return (
        <Box>
            <Box>
                <Typography>Join a global movement. Unleash your creativity.
                </Typography>
                <Typography>Our vibrant community produces content, teaches courses, and leads events all over the world.</Typography>
                <Button color='primary'>Learn More <ArrowForwardIcon color='primary' /></Button>
            </Box>
            <img src={avatars} />
            <Box display='flex' justifyContent="space-evenly" width="80%" margin="auto">
                <GlobalMovementCard heading="1M+" text="community members" />
                <GlobalMovementCard heading="150+"
                    text="community community groups" />
                <GlobalMovementCard heading="50+" text="countries represented" />
            </Box>

        </Box>
    )
}

export default GlobalMovement