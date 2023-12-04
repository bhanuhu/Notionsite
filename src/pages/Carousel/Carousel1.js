import Carousel from 'react-bootstrap/Carousel';
import { Box } from '@mui/system';
import car1 from '../../images/car1.jpeg'
import car2 from '../../images/car2.jpeg'
import car3 from '../../images/car3.jpeg'
import car4 from '../../images/car4.jpeg'

function CarouselFadeExample() {
  return (
    <Box sx={{ml:29 , mr:35 ,mt:2}}>
    <Carousel fade >
      <Carousel.Item>
        <img src={car1}
        width={1000}
        alt={" "}
        loading="lazy" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={car2}
        alt={" "}
        width={1000}
        loading="lazy" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={car3}
        alt={" "}
        width={1000}
        loading="lazy" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={car4}
        alt={" "}
        width={1000}
        loading="lazy" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Box>
  );
}

export default CarouselFadeExample;