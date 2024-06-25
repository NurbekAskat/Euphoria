import { useState } from 'react';
import ClothCard from '../../components/ClothCard/ClothCard';

const MensPage = () => {
  const [mensClothes] = useState([
    {
      name: 'Shirt',
      image: 'https://m.media-amazon.com/images/I/31ulCZK9A4L._AC_SR480,600_.jpg',
    },
    {
      name: 'Printed T-Shirt',
      image: 'https://m.media-amazon.com/images/I/31zbNeR0n-L._AC_SR480,600_.jpg',
    },
    {
      name: 'Polo T-Shirt',
      image: 'https://m.media-amazon.com/images/I/41lQeoUWX4L._AC_SR480,600_.jpg',
    },
    {
      name: 'Hoodies',
      image: 'https://m.media-amazon.com/images/I/41G7qB7bujL._AC_SR480,600_.jpg',
    },
  ]);

  return (
    <div className="container-xxl mt-100">
      <h3 className="title-text fs-2 fw-bold mb-5">Categories For Men</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {mensClothes.map((mensClothe) => (
          <ClothCard name={mensClothe.name} image={mensClothe.image} />
        ))}
      </div>
    </div>
  );
};

export default MensPage;