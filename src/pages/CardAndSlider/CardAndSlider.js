
import React from 'react'
import Slider from '../Slider/Slider'
import { Box } from '@mui/system'
import CardData from './cardData'
import { andre, deborah, oliver } from '../../images/images'

const CardAndSlider = () => {
    return (
        <Box width="100%" margin="auto" display="flex" justifyContent="space-between" marginTop="2.5rem">
            <Box width="48%" backgroundColor="#f3f3f3" sx={{ml:25,borderRadius:3}}>
                <Box   sx={{width:700,m:3 ,borderRadius:3,mr:2}}   >
                    <Slider />
                </Box>

            </Box>
            <Box width="34%" display="flex" flexDirection="column">
                <Box marginBottom="2.5rem" sx={{ml:-4,borderRadius:3}}>
                    <CardData image={deborah} sx={{fontWeight:'bold'}} title="Deborah Mecca" subTitle="@DebMecca" text="I used to HATE documenting things. And then I started using @NotionHQ and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs." />

                </Box>
                <Box marginBottom="2.5rem" sx={{ml:-4,borderRadius:3}}>
                    <CardData image={andre} title="André Blackman" subTitle="@mindofandre" text="One of the most incredible things about @NotionHQ is the dynamic community being built - creating and sharing at its best." />
                </Box >
                <Box sx={{ml:-4,borderRadius:3}}>
                <CardData image={oliver} title="Oliver Peyre" subTitle="@opeyre" text="@NotionHQ Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!" />
                </Box>
                </Box>
        </Box>
    )
}

export default CardAndSlider