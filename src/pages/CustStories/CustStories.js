import { Box, Stack } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12 } from '../../images/images';
const CustStories = () => {
    return (
        <Box><Typography variant="h3" sx={{ fontWeight: "bold" }}>Millions run on Notion every day</Typography>

            <Typography>Powering the world’s best teams, from next-generation startups </Typography>
            <Typography>to established enterprises.</Typography>
            <Box>
                <Button>Read customer stories <ArrowForwardIcon></ArrowForwardIcon></Button>
            </Box>
            <Box sx={{ mb: 5, mt: 5 }}>
                <Stack direction="row" spacing={5} sx={{ ml: 40 }} >
                    <img src={a1} alt={" "} height="30" loading="lazy" />
                    <img src={a2} alt={" "} height="30" loading="lazy" />
                    <img src={a3} alt={" "} height="30" loading="lazy" />
                    <img src={a4} alt={" "} height="30" loading="lazy" />
                    <img src={a5} alt={" "} height="30" loading="lazy" />
                    <img src={a6} alt={" "} height="30" loading="lazy" />
                </Stack>
            </Box>
            <Box sx={{ mb: 5 }}>
                <Stack direction='row' spacing={5} sx={{ ml: 50 }}>
                    <img src={a7} alt={" "} height="30" loading="lazy" />
                    <img src={a8} alt={" "} height="30" loading="lazy" />
                    <img src={a9} alt={" "} height="30" loading="lazy" />
                    <img src={a10} alt={" "} height="30" loading="lazy" />
                    <img src={a11} alt={" "} height="30" loading="lazy" />
                    <img src={a12} alt={" "} height="30" loading="lazy" />
                </Stack>
            </Box></Box>
    )
}

export default CustStories