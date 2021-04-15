import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Baidu Link</Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">Disabled Link</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
