import React from 'react';
import { Carousel } from 'antd';
import './App.css';
import r1 from './img/r1.jpg'
import r2 from './img/r2.jpg'
import r3 from './img/r3.jpg'
const RoutineCleaning = () => {
  const images = [r1, r2, r3];

  return (
    <div style={{ position: 'relative', width: '100%', padding: '20px' }}>
      <Carousel autoplay arrows>
        {images.map((imgSrc, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img 
              src={imgSrc} 
              alt={`Slide ${index + 1}`} 
              style={{ width: '100%', maxHeight: '700px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        ))}
      </Carousel>
      <div>hhhhhhhhhh</div>
    </div>
  );
};

export default RoutineCleaning;