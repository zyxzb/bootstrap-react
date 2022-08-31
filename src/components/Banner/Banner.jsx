import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.scss';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';


const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="cat_image"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="dog_image"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="bird_img"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Banner;
