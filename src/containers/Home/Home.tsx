import { useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import { carouselElement } from '../../types';


const Home = () => {
  const [carousel] = useState<carouselElement[]>([
    { text: 'Mens', image: '../../assets/slide-1.jpg', active: 'active' },
    { text: 'Womens', image: '../../assets/slide-2.jpg', active: '' },
    { text: 'Brands', image: '../../assets/slide-3.jpg', active: '' },
  ]);

  return (
    <Carousel carousel={carousel} />
  );
};

export default Home;