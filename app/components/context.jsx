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
            flex: '1 0 auto',
        }}>
            <Content style={{
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundColor: '#ffff',
              minHeight: 650,
            }}>
               {context}
            </Content>
        </Layout>
    );

}

export default ContextDiv;