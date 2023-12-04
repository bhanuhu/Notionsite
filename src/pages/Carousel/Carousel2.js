import Carousel from 'react-bootstrap/Carousel';
import { Box } from '@mui/system';
import b1 from '../../images/b1.jpeg';
import b2 from '../../images/b2.jpeg';
import b3 from '../../images/b3.jpeg';
import b4 from '../../images/b4.jpeg';
import b5 from '../../images/b4.jpeg';
import b6 from '../../images/b4.jpeg';

function CarouselFadeExample() {
  return (
    <Box sx={{ml:28    , mr:35 ,mt:2,borderRadius:3}}>
    <Carousel fade >
      <Carousel.Item><img src={b1}  width={850 } alt={" "} loading="lazy" text="First slide" /></Carousel.Item>
      <Carousel.Item><img src={b2} alt={" "}  width={850} loading="lazy" text="First slide" /></Carousel.Item>
      <Carousel.Item><img src={b3} alt={" "} width={850} loading="lazy" text="First slide" /></Carousel.Item>
      <Carousel.Item><img src={b4} alt={" "} width={850} loading="lazy" text="First slide" /></Carousel.Item>
      <Carousel.Item><img src={b5} alt={" "} width={850} loading="lazy" text="First slide" /></Carousel.Item>
      <Carousel.Item><img src={b6} alt={" "} width={850} loading="lazy" text="First slide" /></Carousel.Item>
      
    </Carousel>
    </Box>
  );
}

export default CarouselFadeExample;