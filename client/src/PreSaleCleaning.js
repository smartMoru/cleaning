import React from 'react';
import { Carousel, Card } from 'antd';
import './App.css';
import r1 from './img/r1.jpg'
import r2 from './img/r2.jpg'
import r3 from './img/r3.jpg'
const RoutineCleaning = () => {
  const data = [
    { title: "服务1", description: "这是服务1的描述", imageUrl: r1 },
    { title: "服务2", description: "这是服务2的描述", imageUrl: r2 },
    { title: "服务3", description: "这是服务3的描述", imageUrl: r3 },
  ];

  return (
    <Carousel arrows autoplay style={{ width: '100%', padding: '20px' }}>
      {data.map((item, index) => (
        <div key={index}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt={item.title} src={item.imageUrl} style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />}
          >
            <Card.Meta title={item.title} description={item.description} />
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default RoutineCleaning;