import React from 'react'
import { FaBars } from "react-icons/fa"
import { smoothScrollSet } from '../../constants/smoothScrollSet'
import {
    Nav, NavbarContainer, NavLogo,
    MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink
} from './NavbarElements'


const Navbar = ({ toggle }) => {

    return (
        <>
            <Nav>
                <NavbarContainer>

                    <NavLogo to="home"
                        {... smoothScrollSet}>
                        Matrix Bank
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            {... smoothScrollSet}> About </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            {... smoothScrollSet}> Discover </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            {... smoothScrollSet}> Services </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            {... smoothScrollSet}> Sign Up </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
