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

import AutoComplete, { AutoCompleteProps, DataSourceType } from './autoComplete'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

interface ColorsProps {
    value: string;
    string: string;
}

interface GithubUserProps {
    login: string;
    url: string;
}

export default {
    title: 'Stories/AutoComplete',
    component: AutoComplete,
    // 给所有 case 添加参数
    args: {
        fetchSuggestions: (query: string) => {
            const colors = [
                'white', 'black', 'yellow', 'green', 'red', 'pink', 'blue', 'gray', 'orange'
            ]
            const colorsWithString = [
                { value: 'white', string: '#fff' },
                { value: 'black', string: '#000' },
                { value: 'yellow', string: '#f11' },
                { value: 'green', string: '#11f' },
                { value: 'red', string: '#f1f' },
                { value: 'pink', string: '#a22' },
                { value: 'blue', string: '#d44' },
                { value: 'gray', string: '#c5f' },
                { value: 'orange', string: '#e0e' },
            ]

            // return colors.filter(name => name.includes(query)).map(name => ({value: name}))
            // return colorsWithString.filter(item => item.value.includes(query))
            return fetch(`https://api.github.com/search/users?q=${query}`)
                .then(res => res.json())
                .then(({ items }) => {
                    console.log(items)
                    return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
                })
        },
        onSelect: action('selected'),
        renderOption: (item: DataSourceType<GithubUserProps>) => {
            return (
                <>
                    <h2>Name: {item.value}</h2>
                    <p>String: {item.url}</p>
                </>
            )
        }
    },
    // 给所有 case 添加特定的参数
    argTypes: {
        // lakers: {
        //     name: 'lakers',
        //     type: {
        //         name: 'string',
        //         required: true,
        //     },
        //     defaultValue: [
        //         'white', 'black', 'yellow', 'green', 'red', 'pink', 'blue', 'gray', 'orange'
        //     ],
        //     description: 'lakers',
        //     control: 'text',
        // }
    },
    // 给所有 case 添加展示参数
    parameters: {
        // 给所有 case 的 Docs 替换内容
        // docs: {
        //     page: () => (
        //         <>
        //             {/* 标题 */}
        //             <Title>Button</Title>
        //             {/* 副标题 */}
        //             <Subtitle>This is a very nice button component</Subtitle>
        //             {/* 描述 */}
        //             <Description>Custom button</Description>
        //             {/* 主要展示内容 通过 name 指示一个展示组件 */}
        //             <Primary name="Primary Button" />
        //             {/* 设置 tab 切换展示 */}
        //             {/* <ArgsTable story="DefaultButton" /> */}
        //             <ArgsTable 
        //                 components={{
        //                     'Default Button': DefaultButton,
        //                     'Primary Button': PrimaryButton,
        //                     'Danger Button': DangerButton,
        //                     'Link Button': LinkButton,
        //                 }}
        //             />
        //             {/* <ArgsTable of={PrimaryButton} /> */}
        //             {/* 其他 Stories 默认不包含主要展示内容，默认是第一个组件 */}
        //             <Stories includePrimary title="Custom stories title" />
        //         </>
        //     ),
        // },
    },
    // 
    // decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
    // 给所有 case 设定不要 Docs 文档
    // docs: { page: null }
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete {...args} />;

export const SimpleComplete = Template.bind({});
SimpleComplete.args = {
    // children: 'Button',
    // btnType: 'default'
};
SimpleComplete.storyName = 'SimpleComplete';
SimpleComplete.parameters = {
   
}
