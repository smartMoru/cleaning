import React, { useState } from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import AboutUs from './AboutUs';
import RoutineCleaning from './RoutineCleaning'; // 新组件
import EndOfLeaseCleaning from './EndOfLeaseCleaning'; // 新组件
import PreSaleCleaning from './PreSaleCleaning'; // 新组件
const { Header, Content, Footer } = Layout;
// const { Link } = Typography;



function App() {
  const [current, setCurrent] = useState('home');

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
      <div style={{ background: 'navy', color: 'white', textAlign: 'center', padding: '10px' }}>
        Call us on 0456 190 109
      </div>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 50px' }}>
        <div className="logo">
          <img src="image.png" alt="Logo" style={{ maxHeight: '64px' }} />
        </div>
        <Menu theme="dark" mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
          <Menu.Item key="about">About Us</Menu.Item>
          <Dropdown overlay={serviceMenu}>
            <Menu.Item key="service">Service</Menu.Item>
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
        {/* 其他组件的条件渲染可以在此添加 */}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Cleaning Service ©2022 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;

