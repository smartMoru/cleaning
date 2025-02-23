import React from 'react';
import { Carousel } from 'antd';
import './App.css';
import e1 from './img/e1.jpg';
import e2 from './img/e2.jpg';
import e3 from './img/e3.jpg';

const RoutineCleaning = () => {
  const slides = [
    { image: e1, text: "Professional home cleaning services for a fresh and healthy living space." },
    { image: e2, text: "End-of-lease deep cleaning to ensure full bond refund." },
    { image: e3, text: "Eco-friendly cleaning solutions for a sustainable future." }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', padding: '20px' }}>
      <Carousel autoplay arrows>
        {slides.map((slide, index) => (
          <div key={index} style={{ position: 'relative', textAlign: 'center' }}>
            <img 
              src={slide.image} 
              alt={`Slide ${index + 1}`} 
              style={{ width: '100%', maxHeight: '700px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <p style={{
              marginTop: '10px', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              color: '#333'  // 文字颜色
            }}>
              {slide.text}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RoutineCleaning;
