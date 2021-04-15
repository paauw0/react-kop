import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonProps } from './button'

export default {
    title: 'Example/Button',
    component: Button,
    args: {
        onClick: action('click')
    },
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
            ],
        },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button',
    btnType: 'default'
};
Default.storyName = 'Default Button';

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
    btnType: 'primary'
};
Primary.storyName = 'Primary Button';

export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger Button',
    btnType: 'danger'
};
Danger.storyName = 'Danger Button';

export const Link = Template.bind({});
Link.args = {
    children: 'Link Button',
    btnType: 'link'
};
Link.storyName = 'Link Button';