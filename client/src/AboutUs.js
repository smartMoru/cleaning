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
      <Title style={{ color: 'black' }}>About Us</Title>
      <Paragraph>
        我们已经专注于清洁多年，专注于Routine House Cleaning, End Of Lease Cleaning, Pre-Sale Property Cleaning。
      </Paragraph>
      <Paragraph>
      We are more than your local cleaners!
Job satisfaction guaranteed!
We refund if not satisfied!

      </Paragraph>
    </div>
  );
}

export default AboutUs;
