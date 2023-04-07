import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

import React from 'react';
import ContextDiv from './context';

const whatDoWeDoContext = () =>
    {
        return (
            <div>
                <Title>What Do We Do?</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatem explicabo sunt, laudantium dolore beatae maxime eius atque iure nobis corporis veniam laboriosam minus hic rem cumque repudiandae doloremque excepturi?
                </Paragraph>
                <Divider/>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis architecto amet molestias, praesentium fugiat laboriosam quisquam, est eaque officiis sint dolores eius ipsum quibusdam ab hic magni debitis autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, atque assumenda sint, voluptatem, quia eligendi sed vel dicta voluptatum quasi veniam reprehenderit minus? Error fugiat excepturi ipsum aspernatur fugit! Repellat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo a voluptatem rerum explicabo rem quia, impedit perspiciatis dolore aliquam hic delectus vitae dolorum harum fuga eius quod perferendis praesentium ad.
                </Paragraph>
            </div>   
        )
 }

const WhatDoWeDo = () => {
    
    return (
        ContextDiv(whatDoWeDoContext())
    );
};

export default WhatDoWeDo;