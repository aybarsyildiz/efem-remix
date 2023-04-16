import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';

const { Header } = Layout;

const items1 = ['Ana Sayfa', 'Ne yapıyoruz?', 'İletişim'].map((key) => ({
  key,
  label: `${key}`,
}));

const HeaderEfem = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
    setPrevScrollPos(currentScrollPos);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isVisible]);

  return (
    <Header
      className="header"
      style={{
        position: isVisible ? "sticky": "relative",
        top: 0,
        backgroundColor: colorBgContainer,
        zIndex: 1,
        width: '100%',
        padding: 0,
        transition: 'opacity 0.2s ease-in-out',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        items={items1}
      />
    </Header>
  );
};

export default HeaderEfem;
