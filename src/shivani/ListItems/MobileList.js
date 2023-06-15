import React from 'react';
import './MobileList.css';

const Mobile = ({ name, image }) => {
  return (
    <div className="Mobile">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
         
const mobiles = [
  {
    id: 1,
    name:'vivo T2x 5G',
    image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70',
  },
  {
    id: 2,
    name: 'OPPO Reno8T 5G',
    image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/x/r/n/-original-imagmgy5jk8ytxnw.jpeg?q=70',
  },
  {
    id: 3,
    name: 'OnePlus Nord CE 2 Lite 5G ',
    image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/2/p/8/-original-imagg2a4rmk94gay.jpeg?q=70',
  },
  {
    id: 4,
    name: 'SAMSUNG Galaxy F14 5G',
    image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/j/b/r/galaxy-f14-5g-sm-e146bzkhins-samsung-original-imagnzdkvrt2sxrq.jpeg?q=70',
  }
];
         
const MobileList = () => {
  return (
    <div className="mobile-list">
      {mobiles.map((mobile) => (
        <Mobile key={mobile.id} name={mobile.name} image={mobile.image} />
      ))}
    </div>
  );
};

export default MobileList;