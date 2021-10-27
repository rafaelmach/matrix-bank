import React from 'react'
import { smoothScrollSet } from '../../constants/smoothScrollSet'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>

                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}
                    {... smoothScrollSet}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}
                    {... smoothScrollSet}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}
                    {... smoothScrollSet}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}
                    {... smoothScrollSet}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                  <SidebarRoute to="/signin">
                     Sign In 
                  </SidebarRoute>

                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
