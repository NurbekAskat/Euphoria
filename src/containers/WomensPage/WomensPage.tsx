import { useState } from 'react';
import ClothCard from '../../components/ClothCard/ClothCard';

const WomensPage = () => {
  const [WomenClothes] = useState([
    {
      name: 'Sweetshirt',
      image: 'https://m.media-amazon.com/images/I/41VuYCmdnpL._AC_SR480,600_.jpg',
    },
    {
      name: 'Parka',
      image: 'https://m.media-amazon.com/images/I/311Jaken9AL._AC_SR480,600_.jpg',
    },
    {
      name: 'Tee T-Shirt',
      image: 'https://m.media-amazon.com/images/I/41Qn5Qts7bL._AC_SR480,600_.jpg',
    },
    {
      name: 'Coat',
      image: 'https://m.media-amazon.com/images/I/31n+Vb4zJ+L._AC_SR480,600_.jpg',
    },
  ]);

  return (
    <div className="container-xxl mt-100">
      <h3 className="title-text fs-2 fw-bold mb-5">Categories For Men</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {WomenClothes.map((womanClothe) => (
          <ClothCard name={womanClothe.name} image={womanClothe.image} />
        ))}
      </div>
    </div>
  );
};

export default WomensPage;