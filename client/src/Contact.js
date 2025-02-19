import React from 'react';
import { Card } from 'antd';
import qrcode from './qrcode.jpg'; 


const Contact = () => {
  return (
    <div className="contact-container">
      <Card title="Contact" className="contact-card">
        <p><strong>Lillian (English/中文)</strong></p>
        <p><strong>Phone:</strong> 0456 190 109</p>
        <p><strong>Wechat (微信):</strong> dl20059511</p>
        <p className="message">
          *Please leave me a message or text me if I could not pick up your phone in time and I will call you back ASAP.
        </p>
        <div className="qr-code">
          <img src={qrcode} alt="WeChat QR Code" style={{ width: '500px', height: 'auto' }} />
        </div>
      </Card>
    </div>
  );
};

export default Contact;
