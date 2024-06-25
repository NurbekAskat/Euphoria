import React from 'react';

interface Props {
  image: string;
  name: string;
}

const Brand: React.FC<Props> = ({ image, name }) => {
  return (
      <a href="#"
         className="bg-white d-flex align-items-center justify-content-center rounded-3 mt-3 mx-1 mx-xl-2">
        <img src={image} alt={name} className="brandLogo" />
      </a>
  );
};

export default Brand;