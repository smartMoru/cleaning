import React from 'react';
import { Layout, Menu, Typography } from 'antd';
const { Header, Content, Footer } = Layout;
const { Link } = Typography;

function App() {
  return (
    <Layout className="layout">
      <div style={{ background: 'navy', color: 'white', textAlign: 'center', padding: '10px' }}>
        Call us on 1300 XXX XXX
      </div>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 50px' }}>
        <div className="logo">
          <img src="logo.png" alt="Logo" style={{ maxHeight: '64px' }} />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Services</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <p>Page content goes here...</p>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Cleaning Service ©2022 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;

