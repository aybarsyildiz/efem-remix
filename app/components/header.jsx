import {  Layout, Menu, theme } from 'antd';
import React from 'react';
const { Header } = Layout;

const items1 = ['Ana Sayfa', 'Ne yapıyoruz?', 'İletişim'].map((key) => ({
  key,
  label: `${key}`,
}));


const HeaderEfem = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
      <Header className="header">
        <div className="logo" />

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
  );
};
export default HeaderEfem;