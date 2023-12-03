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
                <stack direction="column">

                    <Box>

                        <AutoAwesomeSharpIcon sx={{ color: 'purple', background: '#F0E1F9', borderRadius: '5px', mr: 2 }}></AutoAwesomeSharpIcon>
                        <Typography>AI</Typography>
                        <Typography variant='caption' sx={{ color: 'purple', background: '#F0E1F9', borderRadius: '16px', ml: 2 }} >
                            Now with Q & A
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" >
                            Ask literally anything. Notion
                        </Typography>
                    </Box>
                    <Typography variant="caption" >
                        will answer.
                    </Typography>
                </stack>
            </Button>

            <Button variant="outlined" sx={{ color: 'black', borderRadius: '15px', ml: 2, mr: 2 }}>
                <stack direction="column">

                    <Box>

                        <AutoStoriesOutlinedIcon sx={{ color: '#EA4E43', background: '#FCE9E8', borderRadius: '5px', mr: 2 }}></AutoStoriesOutlinedIcon>
                        <Typography>Wikis</Typography>

                    </Box>
                    <Box>
                        <Typography variant="caption" >
                            Centralize your knowledge.
                        </Typography>
                    </Box>
                    <Typography variant="caption" >
                        No more hunting for answer.
                    </Typography>
                </stack>
            </Button>
            <Button variant="outlined" sx={{ color: 'black', borderRadius: '15px', mr: 2 }}>
                <stack direction="column">

                    <Box>

                        <AutoAwesomeSharpIcon sx={{ color: '#0A85D1', background: '#E2ECF3', borderRadius: '5px', mr: 2 }}></AutoAwesomeSharpIcon>
                        <Typography>Projects</Typography>

                    </Box>
                    <Box>
                        <Typography variant="caption" >
                            Manage complex projects
                        </Typography>
                    </Box>
                    <Typography variant="caption" >
                        without the chaos.
                    </Typography>
                </stack>
            </Button>
            <Button variant="outlined" sx={{ color: 'black', borderRadius: '15px' }}>
                <stack direction="column">

                    <Box>

                        <DescriptionOutlinedIcon sx={{ color: '#FAA700', background: '#FFF6D6', borderRadius: '5px', mr: 2 }}></DescriptionOutlinedIcon>
                        <Typography>Docs</Typography>

                    </Box>
                    <Box>
                        <Typography variant="caption" >
                            Simple, powerful, beautiful.
                        </Typography>
                    </Box>
                    <Typography variant="caption" >
                        Next-gen notes & docs.
                    </Typography>
                </stack>
            </Button>
        </Stack>
    )
}

export default QuestionAnsBox