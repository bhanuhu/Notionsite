import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ElevateAppBar from '../Navbar/Navbar';
import Home from '../Home/Home';
import QuestionAnsBox from '../QuesAnsBox/QuestionAnsBox';
import CustStories from '../CustStories/CustStories';
import ConsolidateCut from '../ConsolidateCut/ConsolidateCut';
import PowerFulBuildingBlock from '../PowerFulBuildingBlock/PowerFulBuildingBlock';
import CustomizeInfo from '../CustomizeInfo/CustomizeInfo';
import EveryTeam from '../Everyteam/EveryTeam';
import GlobalMovement from '../GlobalMovement/GlobalMovement';
import SupportNetwork from '../SupportNetwork/SupportNetwork';
import CardAndSlider from '../CardAndSlider/CardAndSlider';
import EndlessCard from '../EndlessWay/EndlessCard';
import EndlessWay from '../EndlessWay/EndlessWay';
import StartFree from '../StartFree/StartFree';
import CarouselFadeExample from '../Carousel/Carousel1';
import Bottom from '../bottom/Bottom';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <Box>
            <ElevateAppBar />
            <Home />
            <QuestionAnsBox />
            <CarouselFadeExample/>
            <CustStories />
            <ConsolidateCut />
            <PowerFulBuildingBlock />
            <CustomizeInfo />
            <EveryTeam />
            <GlobalMovement />
            <SupportNetwork />
            <CardAndSlider />
            <EndlessWay />
            <StartFree />
            <Bottom/>
        </Box>

    );
}
export default ResponsiveAppBar;