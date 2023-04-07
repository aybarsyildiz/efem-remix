import {  Layout, theme } from 'antd';
import React from 'react';
import HeaderEfem from './header';
import AboutUs from './about-us';

const OnePage = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <Layout style={{
            display:'flex',
        }}>
            <HeaderEfem/>
            <Layout style={{
                display:'block',
                alignContent: 'center',
                padding: 15,
                margin: 10,
            }}>
                <AboutUs/>
            </Layout>
        </Layout>
    );
}
export default OnePage;