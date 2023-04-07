import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

import React from 'react';
import ContextDiv from './context';

const aboutUsContext = () =>
    {
        return (
            <div>
                <Title>CONTEXT</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et ullam quidem provident illum nostrum est, adipisci porro ad tempora delectus officiis dicta, incidunt libero ducimus vitae vero ipsum rem?
                </Paragraph>
                <Divider/>
                <Paragraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime porro repellendus perspiciatis qui impedit temporibus, cupiditate nostrum, praesentium harum quod, veniam placeat debitis minima officiis odit id voluptate asperiores ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt consectetur, explicabo, quibusdam incidunt doloribus reiciendis necessitatibus maxime tempora culpa, ipsa perferendis amet ab! Saepe officiis ab eos debitis minus pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolorum et, unde labore expedita optio illo, quis vel repellendus totam culpa pariatur aperiam obcaecati cumque odit sed rerum quibusdam omnis?
                </Paragraph>
            </div>   
        )
 }

const AboutUs = () => {
    
    return (
        ContextDiv(aboutUsContext())
    );
};

export default AboutUs;