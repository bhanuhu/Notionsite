import { Button, Typography, Stack } from '@mui/material'
import { Box } from '@mui/system'

import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuestionAnsBox = (props) => {
    // const { text, heading, caption, subCaption, icon } = props
    return (
        // <Button variant="outlined" sx={{ color: 'black', borderRadius: '15px', ml: 30 }}>
        //     <stack direction="column">

        //         <Box>
        //             <IconButton aria-label="Example">
        //                 <FontAwesomeIcon icon={icon} sx={{ color: 'purple', background: '#F0E1F9', borderRadius: '5px', mr: 2 }} />
        //             </IconButton>
        //             {/* <AutoAwesomeSharpIcon sx={{ color: 'purple', background: '#F0E1F9', borderRadius: '5px', mr: 2 }}></AutoAwesomeSharpIcon> */}
        //             <Typography>{heading}</Typography>
        //             <Typography variant='caption' sx={{ color: 'purple', background: '#F0E1F9', borderRadius: '16px', ml: 2 }} >
        //                 {text}
        //             </Typography>
        //         </Box>
        //         <Box>
        //             <Typography variant="caption" >
        //                 {caption}
        //             </Typography>
        //         </Box>
        //         <Typography variant="caption" >
        //             {subCaption}
        //         </Typography>
        //     </stack>
        // </Button>
        <Stack direction="row" >

            <Button variant="outlined" sx={{ color: 'black', borderRadius: '15px', ml: 30 }}>
                <Stack direction="column" sx={{mb:1}}>

                    <Stack direction="row" sx={{mb:3 ,mt:2}}>

                        <AutoAwesomeSharpIcon sx={{ color: 'purple', background: '#F0E1F9', borderRadius: '5px', mr: 2 ,p:.25}}></AutoAwesomeSharpIcon>
                        <Typography>AI</Typography>
                        <Typography variant='caption' sx={{ color: 'purple', background: '#F0E1F9', borderRadius: '16px', ml: 2 ,pr:1,pl:1,pt:.5}} >
                            Now with Q & A
                        </Typography>
                    </Stack>
                    <Box>
                        <Typography variant="caption" >
                            Ask literally anything. Notion
                        </Typography>
                    </Box>
                    <Typography variant="caption" >
                        will answer.
                    </Typography>
                </Stack>
            </Button>

            <Button variant="outlined" sx={{ color: 'black', borderRadius: '15px', ml: 2, mr: 2 }}>
                <Stack direction="column" sx={{mb:1}}>

                    <Stack direction="row" sx={{mb:3 ,mt:2}}>

                        <AutoStoriesOutlinedIcon sx={{ color: '#EA4E43', background: '#FCE9E8', borderRadius: '5px', mr: 2,p:.25 }}></AutoStoriesOutlinedIcon>
                        <Typography>Wikis</Typography>

                    </Stack>
                    <Box>
                        <Typography variant="caption" >
                            Centralize your knowledge.
                        </Typography>
                    </Box>
                    <Typography variant="caption" >
                        No more hunting for answer.
                    </Typography>
                </Stack>
            </Button>
            <Button variant="outlined" sx={{ color: 'black', borderRadius: '15px', mr: 2 }}>
                <Stack direction="column" sx={{mb:1}}>

                    <Stack direction="row" sx={{mb:3 ,mt:2}}>

                        <AutoAwesomeSharpIcon sx={{ color: '#0A85D1', background: '#E2ECF3', borderRadius: '5px', mr: 2,p:.25 }}></AutoAwesomeSharpIcon>
                        <Typography>Projects</Typography>

                    </Stack>
                    <Box>
                        <Typography variant="caption" >
                            Manage complex projects
                        </Typography>
                    </Box>
                    <Typography variant="caption" >
                        without the chaos.
                    </Typography>
                </Stack>
            </Button>
            <Button variant="outlined" sx={{ color: 'black', borderRadius: '15px' }}>
                <Stack direction="column" sx={{mb:1}}>

                    <Stack direction="row" sx={{mb:3 ,mt:2}}>

                        <DescriptionOutlinedIcon sx={{ color: '#FAA700', background: '#FFF6D6', borderRadius: '5px', mr: 2 ,p:.25}}></DescriptionOutlinedIcon>
                        <Typography>Docs</Typography>

                    </Stack>
                    <Box>
                        <Typography variant="caption" >
                            Simple, powerful, beautiful.
                        </Typography>
                    </Box>
                    <Typography variant="caption" >
                        Next-gen notes & docs.
                    </Typography>
                </Stack>
            </Button>
        </Stack>
    )
}

export default QuestionAnsBox