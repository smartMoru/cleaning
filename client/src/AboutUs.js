import React from 'react';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

function AboutUs() {
  return (
    <div style={{ 
      backgroundImage: 'url("about-us-background.jpg")', 
      backgroundSize: 'cover', 
      padding: '50px', 
      color: 'white' 
    }}>
      <Title style={{ color: 'white' }}>About Us</Title>
      <Paragraph>
        我们已经专注于清洁多年，专注于Routine House Cleaning, End Of Lease Cleaning, Pre-Sale Property Cleaning。
      </Paragraph>
      <Paragraph>
        在退租清洁方面，我们保证退还全部的bond，在悉尼等地提供服务。
      </Paragraph>
    </div>
  );
}

export default AboutUs;
