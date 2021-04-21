import React, { useState } from 'react';
import Button from './components/Button/__button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'

import { library } from '@fortawesome/fontawesome-svg-core'
// 引入所有图标
import { fas } from '@fortawesome/free-solid-svg-icons'
// 引入部分图标
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)
// library.add(faCheckSquare, faCoffee)


function App() {
  const [ show, setShow ] = useState(false)

  return (
    <div className="App">
      <Button size='lg' onClick={() => {setShow(!show)}}> Toggle </Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left"
      >
        <div>
          <p>
            111111
          </p>
          <p>
            222222
          </p>
          <p>
            333333
          </p>
          <p>
            444444
          </p>
          <p>
            555555
          </p>
          <p>
            666666
          </p>
        </div>
      </Transition>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-top"
        wrapper
      >
        <Button btnType='primary' size='lg'>A Large Button</Button>
      </Transition>

      <hr />

      {/* <FontAwesomeIcon icon={faCoffee} size="10x" /> */}
      <FontAwesomeIcon icon="coffee" size="10x" />
      <Icon theme="danger" icon="coffee" size="10x" />
      <Icon theme="success" icon="check-square" size="10x" />

      <hr />

      <Menu defaultIndex={'0'} onSelect={(index) => {alert(index)}}>
        <MenuItem>
          menu item 1
        </MenuItem>
        <MenuItem disabled>
          menu item 2
        </MenuItem>
        <MenuItem>
          menu item 3
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            menu item 11
          </MenuItem>
          <MenuItem disabled>
            menu item 22
          </MenuItem>
          <MenuItem>
            menu item 33
          </MenuItem>
        </SubMenu>
      </Menu>
      <Menu mode={'vertical'} defaultOpenSubMenus={['3']} defaultIndex={'0'} onSelect={(index) => {alert(index)}}>
        <MenuItem>
          menu item 1
        </MenuItem>
        <MenuItem disabled>
          menu item 2
        </MenuItem>
        <MenuItem>
          menu item 3
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            menu item 11
          </MenuItem>
          <MenuItem disabled>
            menu item 22
          </MenuItem>
          <MenuItem>
            menu item 33
          </MenuItem>
        </SubMenu>
      </Menu>

      <hr />

      <Button className="custom" autoFocus>Hello</Button>
      <Button onClick={(e) => {e.preventDefault(); alert(123);}}>Hello</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType='primary' size='lg'>Large Primary</Button>
      <Button btnType='danger' size='sm'>Small Danger</Button>
      <Button btnType='link' href="http://www.baidu.com" target="_blank">Baidu Link</Button>
      <Button disabled btnType='link' href="http://www.baidu.com">Disabled Link</Button>
    </div>
  );
}

export default App;
