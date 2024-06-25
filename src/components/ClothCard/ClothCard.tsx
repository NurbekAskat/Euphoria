import React from 'react';

interface Props {
  name: string;
  image: string;
}

const ClothCard: React.FC<Props> = ({ name, image }) => {
  return (
    <div className="col mb-3 ">
      <div className="h-100 border-black border">
        <img src={image} className="rounded-3 card-img-top" alt={name} />
        <div className="card-body mt-3">
          <p className="text-dark fw-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ClothCard;