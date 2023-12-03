import { AppBar, Menu, Toolbar } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react';
import { logo } from '../../images/images';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
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
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

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


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                                    noWrap
                                    component="a"
                                    href="#app-bar-with-responsive-menu"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Notion
                                </Typography></box>



                            <div>
                                <Button
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    style={{ background: 'white', color: 'black' }}
                                >
                                    Product
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <EditIcon />
                                        Edit
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <FileCopyIcon />
                                        Duplicate
                                    </MenuItem>
                                    <Divider sx={{ my: 0.5 }} />
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <ArchiveIcon />
                                        Archive
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <MoreHorizIcon />
                                        More
                                    </MenuItem>
                                </StyledMenu>
                            </div>

                            <div>
                                <Button
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    style={{ background: 'white', color: 'black' }}
                                >
                                    Download
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <EditIcon />
                                        Edit
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <FileCopyIcon />
                                        Duplicate
                                    </MenuItem>
                                    <Divider sx={{ my: 0.5 }} />
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <ArchiveIcon />
                                        Archive
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <MoreHorizIcon />
                                        More
                                    </MenuItem>
                                </StyledMenu>
                            </div>
                            <div>
                                <Button
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    style={{ background: 'white', color: 'black' }}
                                >
                                    Solutions
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <EditIcon />
                                        Edit
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <FileCopyIcon />
                                        Duplicate
                                    </MenuItem>
                                    <Divider sx={{ my: 0.5 }} />
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <ArchiveIcon />
                                        Archive
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <MoreHorizIcon />
                                        More
                                    </MenuItem>
                                </StyledMenu>
                            </div>
                            <div>
                                <Button
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    style={{ background: 'white', color: 'black' }}
                                >
                                    Resources
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <EditIcon />
                                        Edit
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <FileCopyIcon />
                                        Duplicate
                                    </MenuItem>
                                    <Divider sx={{ my: 0.5 }} />
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <ArchiveIcon />
                                        Archive
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} disableRipple>
                                        <MoreHorizIcon />
                                        More
                                    </MenuItem>
                                </StyledMenu>
                            </div>
                            <Button variant="text" sx={{ color: 'black' }}>Pricing</Button>
                        </Stack>
                        <Stack direction="row" spacing={2} align="right" sx={{ align: "right" }}>
                            <Button variant="text" sx={{ color: 'black' }}>Request a demo</Button>
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