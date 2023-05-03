import React from 'react';
import './App.css';
import { Layout, Menu, Button } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import Navigation from './Navigation';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="app">
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Products</Menu.Item>
          <Menu.Item key="3">About Us</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
          <Menu.Item key="5" className="right-menu-item">
            <Button type="primary" shape="round" icon={<ShoppingCartOutlined />}>
              Cart
            </Button>
          </Menu.Item>
          <Menu.Item key="6" className="right-menu-item">
            <Button type="primary" shape="round" icon={<UserOutlined />}>
              Login
            </Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 45px' }}>
        <div className="site-layout-content">
          <h2>Welcome to our shop!</h2>
          <p>Best teddy bears in Republic of Moldova.</p>
          <button>Shop Now</button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Teddy Bear Shop ©2021 Created by Your Name</Footer>
    </div>
  );
}

export default App;
