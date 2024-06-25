import React from 'react';
import { carouselElement } from '../../types';
import CarouselItem from '../CarouselItem/CarouselItem';

interface Props {
  carousel: carouselElement[]
}

const Carousel: React.FC<Props> = ({carousel}) => {
  return (
    <div id="main-carousel" className="carousel slide mb-100">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="0" className="active"
                aria-current="true"
                aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {carousel.map((element) => (
          <CarouselItem text={element.text} image={element.image} active={element.active}/>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#main-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#main-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;