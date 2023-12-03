import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { a } from '../../images/images'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
    return (
        <Box marginTop="4rem">
            <Box sx={{ mb: 2 }}>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    Write, plan, share.
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    With AI at your side.
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "Regular" }}>Notion is the connected workspace where better, faster work happens.</Typography>
            </Box>
            <Box>
                <Button variant="contained" sx={{ color: 'white', background: "black" }}>Get Notion free <ArrowForwardIcon></ArrowForwardIcon></Button>
            </Box>
            <Box>
                <img

                    src={a}
                    alt={" "}
                    loading="lazy"
                />
            </Box>
        </Box >
    )
}

export default Home