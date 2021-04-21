import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    // PRIMARY_STORY
} from '@storybook/addon-docs/blocks';

const Welcome = () => {
    return (
        <>
            <h1>Welcome</h1>
            <h3>try to install</h3>
            <code>
                npm install react-kop --save
            </code>
        </>
    )
}

export default {
    title: 'Welcome',
    component: Welcome,
    // 给所有 case 添加参数
    args: {
       
    },
    // 给所有 case 添加特定的参数
    argTypes: {
       
    },
    // 给所有 case 添加展示参数
    parameters: {
        info: {
            disable: true
        }
    },
} as Meta;

const Template: Story = (args) => <Welcome {...args} />;

export const SimpleUpload = Template.bind({});
SimpleUpload.args = {
    // children: 'Button',
    // btnType: 'default'
};
SimpleUpload.storyName = 'SimpleUpload';
SimpleUpload.parameters = {
   
}
