import React from 'react';
import { Card } from 'antd';
import image1 from './image1.jpg'
const RoutineCleaning = () => {
  const data = [
    { title: "服务1", description: "这是服务1的描述", imageUrl: image1 },
    { title: "服务2", description: "这是服务2的描述", imageUrl: "image2.jpg" },
    { title: "服务3", description: "这是服务3的描述", imageUrl: "image3.jpg" },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {data.map((item, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240 }}
          cover={<img alt={item.title} src={item.imageUrl} />}
        >
          <Card.Meta title={item.title} description={item.description} />
        </Card>
      ))}
    </div>
  );
};

export default RoutineCleaning;
