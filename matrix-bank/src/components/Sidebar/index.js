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
                        Sobre
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}
                    {... smoothScrollSet}>
                        Descubra
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}
                    {... smoothScrollSet}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}
                    {... smoothScrollSet}>
                        Abrir conta
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                  <SidebarRoute to="/signin">
                     Entrar 
                  </SidebarRoute>

                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
