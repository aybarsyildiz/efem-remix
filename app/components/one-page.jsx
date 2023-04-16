import { useState, useEffect } from 'react';
import { Layout, theme } from 'antd';
import React from 'react';
import HeaderEfem from './header';
import AboutUs from './about-us';
import WhatDoWeDo from './what-do-we-do';

const OnePage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(true);
    const [showWhatDoWeDo, setShowWhatDoWeDo] = useState(false);


    const handleScroll = (event) => {
        
        if (window.pageYOffset >=400) {
            setScrolled(true);
            setShowAboutUs(false);
            setShowWhatDoWeDo(true);
        } else {
            setScrolled(false);
            setShowAboutUs(true);
            setShowWhatDoWeDo(false);
        }
    }
    useEffect(() => {
        
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, [scrolled,showAboutUs,showWhatDoWeDo]);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const layoutStyle = (stateHandler) => {
        return(
        {display: 'block' ,
        alignContent: 'center',
        padding: 15,
        margin: 10,
        transition: 'opacity 0.5s ease-in-out',
        opacity: stateHandler ? 1 : 0,}
        )
    };

    return (
        
        <Layout onScroll={handleScroll} style={{
            display: 'flex',
            width: '100%',
            padding: 0
        }}>
            <HeaderEfem/>
            <Layout style={layoutStyle(showAboutUs)}>
                <AboutUs />
            </Layout>

            <Layout style={layoutStyle(showWhatDoWeDo)}>
                <WhatDoWeDo />
            </Layout>
        </Layout>
    );
}

export default OnePage;
