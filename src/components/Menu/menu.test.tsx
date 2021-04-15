// import  React from 'react'
import { render, RenderResult, fireEvent, cleanup, waitFor } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenuProps = {
    defaultIndex: '0',
    mode: 'vertical',
    defaultOpenSubMenus: ['4']
}

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem>
                menu item 1 default active
            </MenuItem>
            <MenuItem disabled>
                menu item 2 disabled
            </MenuItem>
            <MenuItem>
                menu item 3
            </MenuItem>
            <SubMenu title="dropdown">
                <MenuItem>
                    dropdown item 11
                </MenuItem>
                <MenuItem>
                    dropdown item 22
                </MenuItem>
                <MenuItem>
                    dropdown item 33
                </MenuItem>
            </SubMenu>
            <SubMenu title="opened">
                <MenuItem>
                    opened1
                </MenuItem>
            </SubMenu>
            {/* <li>hello</li> */}
        </Menu>
    )
}

let wrapper: RenderResult,
    wrapper2: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement

const createStyleFile = () => {
    const cssFile: string = `
        .kop-submenu {
            display: none;
        }
        .kop-submenu.menu-opened {
            display:block;
        }
    `
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = cssFile
    return style
}

describe('test Munu and MenuItem compoent', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        wrapper.container.append(createStyleFile())
        // menuElement= wrapper.container.getElementsByClassName('')
        menuElement= wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('menu item 1 default active')
        disabledElement = wrapper.getByText('menu item 2 disabled')
    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('kop-menu test')
        // expect(menuElement.getElementsByTagName('li').length).toEqual(7)
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
    it('click items should change active and call the right callback', () => {
        const thirdItem = wrapper.getByText('menu item 3')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith('2')
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
    })
    it('should render vertical mode when mode is set to vertical', () => {
        cleanup()
        const wrapper = render(generateMenu(testVerProps))
        const menuElement = wrapper.getByTestId('test-menu')
        // const menuElement = wrapper2.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
    it('should show dropdown items when hover on subMenu', async () => {
        expect(wrapper.queryByText('dropdown item 11')).not.toBeVisible()
        const dropdownElement = wrapper.getByText('dropdown')
        fireEvent.mouseEnter(dropdownElement)
        await waitFor(() => {
            expect(wrapper.queryByText('dropdown item 11')).toBeVisible()
        })
        fireEvent.click(wrapper.getByText('dropdown item 11'))
        expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
        fireEvent.mouseLeave(dropdownElement)
        await waitFor(() => {
          expect(wrapper.queryByText('dropdown item 11')).not.toBeVisible()
        })
    })
})

describe('test Menu and MenuItem component in vertical mode', () => {
    beforeEach(() => {
        wrapper2 = render(generateMenu(testVerProps))
        wrapper2.container.append(createStyleFile())
    })
    it('should render vertical mode when mode is set to vertical', () => {
        const menuElement = wrapper2.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
    it('should show dropdown items when click on subMenu for vertical mode', () => {
        const dropDownItem = wrapper2.queryByText('dropdown item 11')
        expect(dropDownItem).not.toBeVisible()
        fireEvent.click(wrapper2.getByText('dropdown'))
        expect(dropDownItem).toBeVisible()
    })
    it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
        expect(wrapper2.queryByText('opened1')).toBeVisible()
    })
})