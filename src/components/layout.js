// Layout.js

import React from 'react';
import { Layout } from 'antd';
import '../styles/layout.css'; // Import your layout styles
import HeaderMenu from './Header';
import MyFooter from './Footer';

const { Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <HeaderMenu />
      <Content className="content">{children}</Content>
      <MyFooter/>
    </Layout>
  );
};

export default MainLayout;
