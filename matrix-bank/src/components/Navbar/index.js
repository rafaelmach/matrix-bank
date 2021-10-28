import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { smoothScrollSet } from '../../constants/smoothScrollSet'
import { toggleHome } from "../../constants/scrollToTop"
import {
    Nav, NavbarContainer, NavLogo,
    MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink
} from './NavbarElements'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])

    
    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}> 
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>

                    <NavLogo onClick={toggleHome}>
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
            </IconContext.Provider>
        </>
    )
}

export default Navbar
