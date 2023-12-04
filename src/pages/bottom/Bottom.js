import { Divider, Typography } from "@mui/material";
import { Box,Stack } from "@mui/system";
import Button from "@mui/material/Button";
import logo from '../../images/logo.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Butto from './Butto';
const Bottom=()=>{
    return(<Box>
        <Divider component="li"  />
        <Stack direction='row' sx={{mt:10}}>
            <Stack sx={{ml:30}}>
            <box sx={{ ml:20}}>
                <Stack direction='row' >
                <img  height={38}  src={logo}  alt={" "} loading="lazy" />
                <Typography sx={{fontWeight:'bold',mt:1,ml:1}}>Notion</Typography>
                </Stack>
                <Stack direction='row' sx={{mt:3}}>
                <InstagramIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>
                <FacebookIcon/>
                <YouTubeIcon/>
                 </Stack>
                 <Box sx={{mt:4}}><Butto/></Box>
                
            </box>

            </Stack>
            <Stack sx={{ml:20,alignItems:'flex-start'}}>
                <Typography sx={{fontWeight:'bold' }}>Product</Typography>
                <Button sx={{color:'black'}}>Wikis</Button>
                <Button sx={{color:'black'}}>Project</Button>
                <Button sx={{color:'black'}}>Docs</Button>
                <Button sx={{color:'black'}}>Notion AI</Button>
                <Button sx={{color:'black'}}>What's new</Button>

                <Typography sx={{fontWeight:'bold' ,mt:3}}>Solutions</Typography>
                <Button sx={{color:'black'}}>Enterprise</Button>
                <Button sx={{color:'black'}}> Small business</Button>
                <Button sx={{color:'black'}}>Personal use</Button>
                <Button sx={{color:'black'}}>Remote work</Button>
                <Button sx={{color:'black'}}>Startups</Button>
                <Button sx={{color:'black'}}>Education</Button>
                <Button sx={{color:'black'}}>Nonprofits</Button>
                <Button sx={{color:'black'}}>Engineering</Button>
                <Button sx={{color:'black'}}>Product</Button>
                <Button sx={{color:'black'}}>Design</Button>
                <Button sx={{color:'black'}}>Managers</Button>
            </Stack>
            <Stack sx={{ml:10,  alignItems:'flex-start'}}>
                <Typography sx={{fontWeight:'bold'}}>Download</Typography>
                <Button sx={{color:'black'}}>iOS & Android</Button>
                <Button sx={{color:'black'}}>Mac & Windows</Button>
                <Button sx={{color:'black'}}>Web Clipper</Button>
                <Typography sx={{fontWeight:'bold',mt:3}}>Build</Typography>
                <Button sx={{color:'black'}}>Integrations</Button>
                <Button sx={{color:'black'}}>Templates</Button>
                <Button sx={{color:'black'}}>API docs</Button>
                <Button sx={{color:'black'}}>Guides & tutorials</Button>
                <Button sx={{color:'black'}}>Hire a consultant</Button>
                <Button sx={{color:'black'}}>Become an affiliate</Button>
                <Typography sx={{fontWeight:'bold',mt:3}}>Learn</Typography>
                <Button sx={{color:'black'}}>Customer stories</Button>
                <Button sx={{color:'black'}}>Help center</Button>
                <Button sx={{color:'black'}}>Webinars</Button>
                <Button sx={{color:'black'}}>Blog</Button>
                <Button sx={{color:'black'}}>Community</Button>
            </Stack>
            <Stack sx={{ml:10,alignItems:'flex-start'}}>
                <Typography sx={{fontWeight:'bold'}}>Get Started</Typography>
                <Button sx={{color:'black'}}>Switch from Confluence</Button>
                <Button sx={{color:'black'}}>Switch from Asana</Button>
                <Button sx={{color:'black'}}>Switch from Evernote</Button>
                <Button sx={{color:'black'}}>Compare vs Monday</Button>
                <Button sx={{color:'black'}}>Compare vs Clickup</Button>
                <Button sx={{color:'black'}}>Compare vs Jira</Button>
                <Typography sx={{fontWeight:'bold',mt:3 }}    >Resources</Typography>
                <Button sx={{color:'black'}}>Pricing</Button>
                <Button sx={{color:'black'}}>About us</Button>
                <Button sx={{color:'black'}}>Careers</Button>
                <Button sx={{color:'black'}}>Media kit</Button>
                <Button sx={{color:'black'}}>Email us</Button>
                <Button sx={{color:'black'}}>Security</Button>
                <Button sx={{color:'black'}}>Cookie settings</Button>
                <Button sx={{color:'black'}}>Terms & privacy </Button>
                <Button sx={{color:'black'}}>California Privacy Notice</Button>
                <Button sx={{color:'black'}}>Status</Button>

            </Stack>
        </Stack>
        
        </Box>)
}
export default Bottom;