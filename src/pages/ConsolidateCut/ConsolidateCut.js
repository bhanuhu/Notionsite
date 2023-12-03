import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import { a13, a14, a15, pencil, sketch } from '../../images/images';
const ConsolidateCut = () => {
    return (
        <Box>

            <Stack direction='row' spacing={5} sx={{ ml: 70, mb: 15 }}>
                <img src={a13} alt={" "} height="30" loading="lazy" />
                <img src={a14} alt={" "} height="30" loading="lazy" />
            </Stack>
            <Stack direction='row' >
                <Typography variant="h3" sx={{ fontWeight: "bold", ml: 70 }}>Consolidate tools.</Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", mt: 7, ml: -45 }}>Cut costs.</Typography>
                <Box sx={{ ml: 15, mt: -5, }}>
                    <img src={pencil} alt={" "} height="200" loading="lazy" /></Box>

            </Stack>
            <Box sx={{ mb: 10 }}>
                <img src={sketch} alt={" "} height="40" width="675" loading="lazy" /></Box>
            <Box sx={{ bm: 10 }}>
                <Typography variant='h5' >"We got rid of nearly a dozen different tools because of</Typography>
                <Typography variant='h5' >what Notion does for us.</Typography>
            </Box>
            <Stack direction="row" sx={{ ml: 74, mb: 18 }}>
                <img src={a15} alt={" "} height="40" loading="lazy" />
                <Stack >

                    <Typography variant='caption' sx={{ fontWeight: "bold", ml: -18 }}>Justin Watt  </Typography>
                    <Typography variant='caption'>Director of Ops & Marketing, MetaLab</Typography></Stack>
            </Stack>


        </Box>
    )
}

export default ConsolidateCut