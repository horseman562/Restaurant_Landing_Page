import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                
                <SidebarLink href='#pizzas'>PIzzas</SidebarLink>
                
                <SidebarLink to='/features'>Desserts</SidebarLink>
                <SidebarLink to='/fullmenu'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/fullmenu'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
