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

import Upload, { UploadProps, UploadFile } from './upload'

const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
        alert('file too big')
        return false
    }
    return true
}

const filePromise = (file: File) => {
    const newFile = new File([file], 'new_name.txt', {type: file.type})
    return Promise.resolve(newFile)
}

const defaultFileList: UploadFile[] = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]

export default {
    title: 'Stories/Upload',
    component: Upload,
    // 给所有 case 添加参数
    args: {
        // action: 'https://jsonplaceholder.typicode.com/posts/',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        // onProgress: action('progress'),
        // onSuccess: action('success'),
        // onError: action('error'),
        onChange: action('change'),
        // beforeUpload: checkFileSize,
        // beforeUpload: filePromise,

        // defaultFileList,

        name: 'fileName',
        data: {key: 'value'},
        headers: {'X-Powered-By': 'kop'},
        // accept: '.jpg',
        multiple: true,
        children: 'drop file over to upload',
        drag: true,
    },
    // 给所有 case 添加特定的参数
    argTypes: {
       
    },
    // 给所有 case 添加展示参数
    parameters: {

    },
} as Meta;

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

export const SimpleUpload = Template.bind({});
SimpleUpload.args = {
    // children: 'Button',
    // btnType: 'default'
};
SimpleUpload.storyName = 'SimpleUpload';
SimpleUpload.parameters = {
   
}
