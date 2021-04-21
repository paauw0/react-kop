
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    // 全局启动扩展模式--Canvas 下的 Controls 区域 出现 Description 和 Default 展示
    expanded: true
  },
  // 给所有 story 展示区域添加参数，通过点击改变背景色小图标可选择设定颜色
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
}

export const decorators = [
  (Story) => (
    <div style={{ padding: '2em' }}>
      <Story />
    </div>
  ),
];