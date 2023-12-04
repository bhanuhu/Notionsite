import { AppBar, Menu, Toolbar } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react';
import { logo } from '../../images/images';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {Box} from '@mui/system';
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [anchorE3, setAnchorE3] = React.useState(null);
    const [anchorE4, setAnchorE4] = React.useState(null);
    const open1 = Boolean(anchorEl);
    const open2 = Boolean(anchorE2);
    const open3 = Boolean(anchorE3);
    const open4 = Boolean(anchorE4);

    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));


    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl(null);
    };
    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorE2(null);
    };
    const handleClick3 = (event) => {
        setAnchorE3(event.currentTarget);
    };
    const handleClose3 = () => {
        setAnchorE3(null);
    };
    const handleClick4 = (event) => {
        setAnchorE4(event.currentTarget);
    };
    const handleClose4 = () => {
        setAnchorE4(null);
    };

    return (
        <ElevationScroll {...props}>

            <AppBar position="fixed" style={{ background: 'white', color: "black", border: 0 }}>
                <Container maxWidth="xl">
                    <Toolbar    >
                        <Stack direction="row" sx={{ align: "left" }}>

                            <box sx={{ mr: 10 }}>
                                <img
                                    height={38}
                                    src={logo}
                                    alt={" "}
                                    loading="lazy"


                                />
                            </box>

                            <box >
                                <Typography
                                    variant="h6"
                                    
                                    sx={{ mt:.5 ,ml:1,mr: 2,display: { xs: 'none', md: 'flex' },fontFamily: 'monospace',
                                        fontWeight: 700,letterSpacing: '.3rem',color: 'black',textDecoration: 'none',}}
                                >
                                    Notion
                                </Typography></box>



                            <div>
                                <Button
                                    id="demo-customized-button1"
                                    aria-controls={open1 ? 'demo-customized-menu1' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open1 ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick1}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    style={{ background: 'white', color: 'black' }}
                                >
                                    Product
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu1"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button1',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open1}
                                    onClose={handleClose1}
                                >
                                <Stack direction='row'>
                                <Stack>
                                    <MenuItem onClick={handleClose1} disableRipple><Stack direction='row'><AutoStoriesOutlinedIcon sx={{ color: '#EA4E43', background: '#FCE9E8', borderRadius: '5px',mt:1 }}></AutoStoriesOutlinedIcon><Stack><Typography>Wikis</Typography><Typography variant='caption'>Centralize your Knowledge</Typography></Stack></Stack></MenuItem> 
                                    <MenuItem onClick={handleClose1} disableRipple><Stack direction='row'><AutoAwesomeSharpIcon sx={{ color: '#0A85D1', background: '#E2ECF3', borderRadius: '5px', mt:1 }}></AutoAwesomeSharpIcon><Stack><Typography>Projects</Typography><Typography variant='caption'>For every team or size</Typography></Stack></Stack></MenuItem>
                                    <MenuItem onClick={handleClose1} disableRipple><Stack direction='row'><DescriptionOutlinedIcon sx={{ color: '#FAA700', background: '#FFF6D6', borderRadius: '5px', mt:1}}></DescriptionOutlinedIcon><Stack><Typography>Docs</Typography><Typography variant='caption'>Simple & powerful</Typography></Stack></Stack></MenuItem>
                                    <MenuItem onClick={handleClose1} disableRipple><Stack direction='row'><AutoAwesomeSharpIcon sx={{ color: 'purple', background: '#F0E1F9', borderRadius: '5px', mt:1}}></AutoAwesomeSharpIcon><Stack><Typography>Notion AI</Typography><Typography variant='caption'>Integrated AI assistant</Typography></Stack></Stack></MenuItem>
                                </Stack>
                                <Stack>
                                <Divider component="li" sx={{ orientation: 'vertical', backgroundColor: 'black' }}></Divider>
                                </Stack>
                                <Stack>
                                    <MenuItem onClick={handleClose1} disableRipple><Stack><Typography>Template Gallerry</Typography><Typography variant='caption'>Setups to get you started</Typography></Stack></MenuItem>
                                    <MenuItem onClick={handleClose1} disableRipple><Stack><Typography>Customer Stories</Typography><Typography variant='caption'>See how team uses Notion</Typography></Stack></MenuItem>
                                    <MenuItem onClick={handleClose1} disableRipple><Stack><Typography>Connections</Typography><Typography variant='caption'>Connect your tools to Notion</Typography></Stack></MenuItem>
                                
                                </Stack>
                                </Stack>
                                   
                            </StyledMenu>

                            </div>

                            <div>
                                <Button
                                    id="demo-customized-button2"
                                    aria-controls={open2 ? 'demo-customized-menu2' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open2 ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick2}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    style={{ background: 'white', color: 'black' }}
                                >
                                    Download
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu2"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button2',
                                    }}
                                    anchorEl={anchorE2}
                                    open={open2}
                                    onClose={handleClose2}
                                >
                                <Stack>
                                <MenuItem onClick={handleClose2} disableRipple>iOS & Android</MenuItem>
                                <MenuItem onClick={handleClose2} disableRipple>Mac & Windows</MenuItem>
                                <MenuItem onClick={handleClose2} disableRipple>Web Clipper</MenuItem>
                            
                            </Stack>
                                </StyledMenu>
                            </div>
                            <div>
                                <Button
                                    id="demo-customized-button3"
                                    aria-controls={open3 ? 'demo-customized-menu3' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open3 ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick3}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    style={{ background: 'white', color: 'black' }}
                                >
                                    Solutions
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu3"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button3',
                                    }}
                                    anchorEl={anchorE3}
                                    open={open3}
                                    onClose={handleClose3}
                                >
                                    <Stack direction='row'>
                                        <Stack>
                                        <Stack>
                                            <MenuItem onClick={handleClose3} disableRipple><Stack direction='row'><ApartmentIcon sx={{mt:1}}/><Stack><Typography>Enterprise</Typography><Typography variant='caption'>Advanced feature for your org</Typography></Stack></Stack></MenuItem>
                                            <MenuItem onClick={handleClose3} disableRipple><Stack direction='row'><MapsHomeWorkIcon sx={{mt:1}}/><Stack><Typography>Small Business</Typography><Typography variant='caption'>Run your team on one tool</Typography></Stack></Stack></MenuItem>
                                            <MenuItem onClick={handleClose3} disableRipple><Stack direction='row'><HomeIcon sx={{mt:1}}/><Stack><Typography>Personal</Typography><Typography variant='caption'>Free for individuals</Typography></Stack></Stack></MenuItem>
                                    
                                        </Stack>
                                        </Stack>
                                        <Stack>
                                            <MenuItem onClick={handleClose3} disableRipple>Design</MenuItem>
                                            <MenuItem onClick={handleClose3} disableRipple>Engineering</MenuItem>
                                            <MenuItem onClick={handleClose3} disableRipple>Product</MenuItem>
                                            <MenuItem onClick={handleClose3} disableRipple>Managers</MenuItem>
                                        </Stack>
                                        <Stack>
                                            <MenuItem onClick={handleClose3} disableRipple>Startups</MenuItem>
                                            <MenuItem onClick={handleClose3} disableRipple>Remote Work</MenuItem>
                                            <MenuItem onClick={handleClose3} disableRipple>Education</MenuItem>
                                            <MenuItem onClick={handleClose3} disableRipple>Non Profits</MenuItem>
                                        </Stack>                                   
                                    
                                    </Stack>
                                </StyledMenu>
                            </div>
                            <div>
                                <Button
                                    id="demo-customized-button4"
                                    aria-controls={open4 ? 'demo-customized-menu4' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open4 ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick4}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    style={{ background: 'white', color: 'black' }}
                                >
                                    Resources
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu4"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button4',
                                    }}
                                    anchorEl={anchorE4}
                                    open={open4}
                                    onClose={handleClose4}
                                >
                                <Stack>
                                    <MenuItem onClick={handleClose4} disableRipple>Blog</MenuItem>
                                    <MenuItem onClick={handleClose4} disableRipple>Guides & Tutorials</MenuItem>
                                    <MenuItem onClick={handleClose4} disableRipple>Webinars</MenuItem>
                                    <MenuItem onClick={handleClose4} disableRipple>Help Center</MenuItem>
                                    <MenuItem onClick={handleClose4} disableRipple>API docs</MenuItem>
                                    <MenuItem onClick={handleClose4} disableRipple>Community</MenuItem>
                                    <MenuItem onClick={handleClose4} disableRipple>Hire a Consultant</MenuItem>
                            </Stack>
                                </StyledMenu>
                            </div>
                            <Button variant="text" sx={{ color: 'black' ,mr:20 }}>Pricing</Button>
                        </Stack>
                        <Stack direction="row" spacing={2} align="right" sx={{ align: "right" }}>
                            <Button variant="text" sx={{ color: 'black' }}>Request a demo</Button>

                            <Divider orientation="vertical" variant='middle' sx={{backgroundColor:'black'}}flexItem />
                            <Divider sx={{ orientation: 'vertical', color: 'black' }}></Divider>
                            <Button variant="text" sx={{ color: 'black' }}>Log in</Button>
                            <Button variant="contained" sx={{ color: 'white', background: "black" }}>Get Notion free</Button>
                        </Stack>




                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    )
}

export default Navbar