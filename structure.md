# 项目结构
styles/
    _variables.scss(各种变量以及可配置设置)(_ 开头模块告诉 scss 不要将其编译到 css 文件，在导入语句时不需要 _。没法被编译成单独的 css 文件，只能被导入)
    _mixins.scss(全局 mixins)
    _functions.scss(全局 functions)
components/