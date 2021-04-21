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

import Button, { ButtonProps } from './__button'

export default {
    title: 'Stories/Button',
    component: Button,
    // 给所有 case 添加参数
    args: {
        // onClick: action('click')
    },
    // 给所有 case 添加特定的参数
    argTypes: {
        primary: { 
            control: 'boolean'
        },
        // btnType: {
        //     name: 'btnType',
        //     type: {
        //         name: 'string',
        //         required: false,
        //     },
        //     defaultValue: 'default',
        //     description: 'button type',
        //     table: {
        //         type: { summary: 'string', detail: 'something really really long' },
        //         defaultValue: { summary: 'default' },
        //     },
        //     control: {
        //         type: 'inline-radio',
        //         options: ['default', 'primary', 'danger', 'link']
        //     } 
        // },
    },
    // 给所有 case 添加展示参数
    parameters: {
        // 给所有 case 的展示区域添加参数，通过点击改变背景色小图标可选择设定颜色
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
            ],
        },
        // 给所有 case 的 Docs 替换内容
        docs: {
            page: () => (
                <>
                    {/* 标题 */}
                    <Title>Button</Title>
                    {/* 副标题 */}
                    <Subtitle>This is a very nice button component</Subtitle>
                    {/* 描述 */}
                    <Description>Custom button</Description>
                    {/* 主要展示内容 通过 name 指示一个展示组件 */}
                    <Primary name="Primary Button" />
                    {/* 设置 tab 切换展示 */}
                    {/* <ArgsTable story="DefaultButton" /> */}
                    <ArgsTable 
                        components={{
                            'Default Button': DefaultButton,
                            'Primary Button': PrimaryButton,
                            'Danger Button': DangerButton,
                            'Link Button': LinkButton,
                        }}
                    />
                    {/* <ArgsTable of={PrimaryButton} /> */}
                    {/* 其他 Stories 默认不包含主要展示内容，默认是第一个组件 */}
                    <Stories includePrimary title="Custom stories title" />
                </>
            ),
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
    // children: 'Button',
    // btnType: 'default'
};
DefaultButton.storyName = 'Button';
// 给特定 case 添加展示样式，但是 Docs 文档里 Show code 展示代码有问题
// DefaultButton.decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
DefaultButton.parameters = {
    backgrounds: {
        values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
        ],
    },
}

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    // children: 'Primary Button',
    // btnType: 'primary'
};
PrimaryButton.storyName = 'Primary Button';

export const DangerButton = Template.bind({});
DangerButton.args = {
    // children: 'Danger Button',
    // btnType: 'danger'
};
DangerButton.storyName = 'Danger Button';

export const LinkButton = Template.bind({});
LinkButton.args = {
    // children: 'Link Button',
    // btnType: 'link'
};
LinkButton.storyName = 'Link Button';
LinkButton.parameters = {
    subcomponents: {
        'Primary Button': PrimaryButton,
        'Danger Button': DangerButton,
    }
}