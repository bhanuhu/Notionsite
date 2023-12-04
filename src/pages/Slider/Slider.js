import Carousel from 'react-bootstrap/Carousel';
import list from '../../images/c1.jpeg'
import gallery from '../../images/c2.jpeg'
import calendar from '../../images/c3.jpeg'
import timeline from '../../images/c4.jpeg'
function Slider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
      <img src={list} class="d-block w-100" alt="..." height="550px" />
        <Carousel.Caption>
          
          <p>Sharing Notion setups in San Francisco

          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={gallery} class="d-block w-100" alt="..." height="550px" />
        <Carousel.Caption>
      
          <p>Coffee pop-up in London</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={calendar} class="d-block w-100" alt="..." height="550px" />
        <Carousel.Caption>
       
          <p>
          Community Meetup in Tokyo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={timeline} class="d-block w-100" alt="..." height="550px" />
      <Carousel.Caption>
       
      <p>
        Notion Ambassdor event in New York.
      </p>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;