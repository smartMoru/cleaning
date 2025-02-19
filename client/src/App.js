import React, { useState } from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import AboutUs from './AboutUs';
import RoutineCleaning from './RoutineCleaning'; // 新组件
import EndOfLeaseCleaning from './EndOfLeaseCleaning'; // 新组件
import PreSaleCleaning from './PreSaleCleaning'; // 新组件
import Contact from './Contact';
import image from './image.png';
import Pricing from './Pricing';
import './App.css';  
import { DownOutlined } from '@ant-design/icons';



const { Header, Content, Footer } = Layout;
// const { Link } = Typography;



function App() {
  const [current, setCurrent] = useState('about');

  const handleClick = e => {
    setCurrent(e.key);
  };
  const serviceMenu = (
    <Menu onClick={handleClick}>
      <Menu.Item key="routine">Routine House Cleaning</Menu.Item>
      <Menu.Item key="endOfLease">End Of Lease Cleaning</Menu.Item>
      <Menu.Item key="preSale">Pre-Sale Property Cleaning</Menu.Item>
    </Menu>
  );
  return (
    <Layout className="layout">
      <div style={{ background: 'linear-gradient(to right, #393939 0%, #b6c3b5 100%)', color: 'white', textAlign: 'center', padding: '10px' }}>
      <a 
        href="tel:0456190109" 
        style={{ 
        color: 'white', 
        textDecoration: 'none',
        transition: 'opacity 0.3s ease'
      }}
      onMouseOver={(e) => e.target.style.opacity = '0.7'} 
      onMouseOut={(e) => e.target.style.opacity = '1'}
  >
          ☎ Call us on 0456 190 109
        </a>
      </div>
      <Header style={{ background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 50px' }}>
        <div className="logo">
          <img src={image} alt="Logo" style={{ maxHeight: '64px' }} />
        </div>
        <Menu theme="light" mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
          <Menu.Item key="about">About Us</Menu.Item>
          <Dropdown overlay={serviceMenu}>
  <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    Service <DownOutlined />
  </span>
</Dropdown>

          <Menu.Item key="pricing">Pricing</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
          <Menu.Item key="eco">Eco Highlights</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        {current === 'about' && <AboutUs />}
        {current === 'routine' && <RoutineCleaning />}
        {current === 'endOfLease' && <EndOfLeaseCleaning />}
        {current === 'preSale' && <PreSaleCleaning />}
        {current === 'pricing' && <Pricing />}
        {current === 'contact' && <Contact />}
        {/* 其他组件的条件渲染可以在此添加 */}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Cleaning Service ©2022 Created by Liang
      </Footer>
    </Layout>
  );
}

export default App;

