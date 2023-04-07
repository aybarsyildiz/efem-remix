import {  Layout, theme } from 'antd';
const {Content} = Layout;

import React from 'react';

const ContextDiv = (context) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return(
        <Layout style={{
            margin: 10,
            padding:20,
        }}>
            <Content style={{
              borderRadius: 20,
              minHeight: 512,
              textAlign: 'center',
              backgroundColor: '#ffff'
            }}>
               {context}
            </Content>
        </Layout>
    );

}

export default ContextDiv;