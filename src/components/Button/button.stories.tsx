import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from './button'

export default {
    title: 'Stories/Button',
    component: Button,
    // 给所有 case 添加参数
    args: {
        // onClick: action('click')
    },
    // 给所有 case 添加特定的参数
    argTypes: {
        type: {
            name: 'type',
            type: {
                name: 'string',
                required: false,
            },
            defaultValue: 'default',
            description: 'button type',
            table: {
                // type: { summary: 'string', detail: 'something really really long' },
                defaultValue: { summary: 'default' },
            },
            control: {
                type: 'inline-radio',
                options: ['default', 'primary', 'danger', 'link', 'dashed', 'text', 'ghost']
            } 
        },
    },
    // 给所有 case 添加展示参数
    parameters: {
        // 给所有 case 的展示区域添加参数，通过点击改变背景色小图标可选择设定颜色
        backgrounds: {
            values: [
                { name: 'black', value: '#000' },
                { name: 'white', value: '#fff' },
            ],
        },
    },
    // 
    // decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
    // 给所有 case 设定不要 Docs 文档
    // docs: { page: null }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    // children: 'Simple Button',
    // type: 'default'
};
DefaultButton.storyName = 'Simple Button';
// 给特定 case 添加展示样式，但是 Docs 文档里 Show code 展示代码有问题
// DefaultButton.decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
// 给特定 case 添加展示参数
DefaultButton.parameters = {
    backgrounds: {
        values: [
            { name: 'orange', value: '#fd7e14' },
            { name: 'yellow', value: '#fadb14' },
        ],
    },
}

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    // children: 'Primary Button',
    // type: 'primary'
};
PrimaryButton.storyName = 'Primary Button';

export const DangerButton = Template.bind({});
DangerButton.args = {
    // children: 'Danger Button',
    // type: 'danger'
};
DangerButton.storyName = 'Danger Button';

export const LinkButton = Template.bind({});
// LinkButton.args = {
//     children: 'Link Button',
//     type: 'link',
//     href: 'https://www.baidu.com',
//     target: '_blank'
// };
LinkButton.storyName = 'Link Button';
LinkButton.parameters = {
    
}
