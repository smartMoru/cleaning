import React from 'react';
import { Card, Row, Col } from 'antd';

const Pricing = () => {
  const services = [
    {
      key: 'endOfLease',
      title: 'End of lease cleaning (move in/out)',
      price: 'from $359',
      features: [
        'At the end of tenancy',
        'Meet agent’s requirement',
        'Get your bond back easily'
      ]
    },
    {
      key: 'oneTime',
      title: 'Routine House Cleaning',
      price: 'from $129',
      features: [
        'By appointment or regular cleaning',
        'Ensure a clean and tidy environment',
        'Keep your home comfy and healthy'
      ]
    },
    {
      key: 'officeCleaning',
      title: 'Pre-Sale Property Cleaning',
      price: 'from $158',
      features: [
        'Deep cleaning before sale',
        'Add value to your property',
        'More confident to sell'
      ]
    }
  ];

  return (
    <div style={{ background: '#f0f2f5', padding: '30px' }}>
      <Row gutter={16}>
        {services.map(service => (
          <Col span={8} key={service.key}>
            <Card
              title={<span style={{ fontSize: '20px', color: '#1890ff' }}>{service.title}</span>}
              bordered={false}
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              headStyle={{ borderBottom: 'none' }}
            >
              <p style={{ fontSize: '24px', color: '#52c41a', margin: '10px 0' }}>{service.price}</p>
              {service.features.map((feature, index) => (
                <p key={index} style={{ marginBottom: '8px' }}>{feature}</p>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Pricing;
