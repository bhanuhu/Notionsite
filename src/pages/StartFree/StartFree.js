import { Typography, Box } from '@mui/material'
import React from 'react'
import { parade } from '../../images/images';
import Button from "@mui/material/Button";
// import { createMuiTheme } from 'material-ui/styles'
// import { black } from 'material-ui/colors'
// import { ThemeProvider } from '@emotion/react';

// const blackTheme = createMuiTheme({ palette: { primary: "#ccc" } })


const StartFree = () => {
    return (
        <Box>
            <Typography variant='h2' fontWeight="700" marginTop="5rem" sx={{mb:2}}>
                Get started for free
            </Typography>
            <Typography fontWeight="500" sx={{mb:2}}>Play around with it first. Pay and add your team later.</Typography>
            <Box display="flex" justifyContent="center">
                {/* <ThemeProvider heme={blackTheme}> */}
                <Button variant="contained" sx={{backgroundColor:'black' ,borderRadius:2}}>
                    Try Notion free
                </Button>
                <Button color='primary'>
                    Request a demo→
                </Button>
                {/* </ThemeProvider> */}
            </Box>
            <img src={parade} />
        </Box>
    )
}

export default StartFree



