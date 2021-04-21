import React, { useState } from 'react';
import Button from './components/Button/__button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition';
import { library } from '@fortawesome/fontawesome-svg-core';
// 引入所有图标
import { fas } from '@fortawesome/free-solid-svg-icons';
// 引入部分图标
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);
// library.add(faCheckSquare, faCoffee)
function App() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement(Button, { size: 'lg', onClick: function () { setShow(!show); } }, " Toggle "),
        React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left" },
            React.createElement("div", null,
                React.createElement("p", null, "111111"),
                React.createElement("p", null, "222222"),
                React.createElement("p", null, "333333"),
                React.createElement("p", null, "444444"),
                React.createElement("p", null, "555555"),
                React.createElement("p", null, "666666"))),
        React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-top", wrapper: true },
            React.createElement(Button, { btnType: 'primary', size: 'lg' }, "A Large Button")),
        React.createElement("hr", null),
        React.createElement(FontAwesomeIcon, { icon: "coffee", size: "10x" }),
        React.createElement(Icon, { theme: "danger", icon: "coffee", size: "10x" }),
        React.createElement(Icon, { theme: "success", icon: "check-square", size: "10x" }),
        React.createElement("hr", null),
        React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { alert(index); } },
            React.createElement(MenuItem, null, "menu item 1"),
            React.createElement(MenuItem, { disabled: true }, "menu item 2"),
            React.createElement(MenuItem, null, "menu item 3"),
            React.createElement(SubMenu, { title: "dropdown" },
                React.createElement(MenuItem, null, "menu item 11"),
                React.createElement(MenuItem, { disabled: true }, "menu item 22"),
                React.createElement(MenuItem, null, "menu item 33"))),
        React.createElement(Menu, { mode: 'vertical', defaultOpenSubMenus: ['3'], defaultIndex: '0', onSelect: function (index) { alert(index); } },
            React.createElement(MenuItem, null, "menu item 1"),
            React.createElement(MenuItem, { disabled: true }, "menu item 2"),
            React.createElement(MenuItem, null, "menu item 3"),
            React.createElement(SubMenu, { title: "dropdown" },
                React.createElement(MenuItem, null, "menu item 11"),
                React.createElement(MenuItem, { disabled: true }, "menu item 22"),
                React.createElement(MenuItem, null, "menu item 33"))),
        React.createElement("hr", null),
        React.createElement(Button, { className: "custom", autoFocus: true }, "Hello"),
        React.createElement(Button, { onClick: function (e) { e.preventDefault(); alert(123); } }, "Hello"),
        React.createElement(Button, { disabled: true }, "Disabled Button"),
        React.createElement(Button, { btnType: 'primary', size: 'lg' }, "Large Primary"),
        React.createElement(Button, { btnType: 'danger', size: 'sm' }, "Small Danger"),
        React.createElement(Button, { btnType: 'link', href: "http://www.baidu.com", target: "_blank" }, "Baidu Link"),
        React.createElement(Button, { disabled: true, btnType: 'link', href: "http://www.baidu.com" }, "Disabled Link")));
}
export default App;
