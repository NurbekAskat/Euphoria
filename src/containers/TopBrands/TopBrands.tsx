import Brand from '../../components/Brand/Brand';
import { useState } from 'react';

const TopBrands = () => {
  const [brands] = useState([
    { name: 'nike', image: 'https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg' },
    { name: 'puma', image: 'https://promotionconnects.in/wp-content/uploads/2021/06/puma-logo-.png' },
    {
      name: 'H&M',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png',
    },
    {
      name: 'Lewis',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Y2EJQTsg_TmcCnVFgTC7Qyrb9CoX48SZFg&s',
    },
    {
      name: 'Polo',
      image: 'https://media.designrush.com/inspiration_images/137129/conversions/_1526408913_622_Ralph-Lauren-Stacked-Logo_2917332a71fa-mobile.jpg',
    },
  ]);

  return (
    <div className="container-xxl bg-dark mb-5 rounded-3 brands-main-block mt-100">
      <h4 className="text-white fw-bold brands-title text-center ">Top Brands Deal</h4>
      <div className="brands-block row mx-3 justify-content-center">
        {brands.map((brand) => (
          <Brand name={brand.name} image={brand.image} />
        ))}
      </div>
    </div>
  );
};

export default TopBrands;