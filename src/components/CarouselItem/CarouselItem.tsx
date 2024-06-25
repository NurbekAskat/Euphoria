import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
  text: string;
  active: string;
  image: string;
}

const CarouselItem: React.FC<Props> = ({text, active, image}) => {
  return (
    <div className={`carousel-item active ${active}`}>
      <img src={image} className="d-block w-100" alt="" />
      <div className="carousel-caption d-none d-sm-block text-start top-50 translate-middle-y">
        <p className="fw-semibold lh-sm">Summer <br />{text}</p>
        <Link to="#" className="btn btn-light py-3 px-5 fs-4 fw-medium btn-shop bg-white">Shop Now</Link>
      </div>
    </div>
  );
};

export default CarouselItem;