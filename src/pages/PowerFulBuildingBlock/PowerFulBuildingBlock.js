import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SwipeableTextMobileStepper from '../Carousel/Carousel';

const PowerFulBuildingBlock = () => {
    return (
        <Box><Typography variant="h3" sx={{ fontWeight: "bold" }}>Powerful building blocks</Typography>
            <Box bgcolor="#f3f3f3" width="80%" margin="auto" height="54rem" borderRadius="10px">
                <ShuffleIcon color="primary" />
                <h2>Visualize, filter & sort any way you want</h2>
                <p>Show only tasks assigned to you, or items marked as urgent. Break</p>
                <p>down any project in the way that’s most helpful to you.</p>
                <Box width="90%" margin="auto">
                    <SwipeableTextMobileStepper /></Box></Box></Box>
    )
}

export default PowerFulBuildingBlock