import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { smoothScrollSet } from '../../constants/smoothScrollSet'
import { toggleHome } from "../../constants/scrollToTop"
import { motion, AnimatePresence } from "framer-motion"
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
        <AnimatePresence>
        <IconContext.Provider value={{ color: "#fff" }}> 
            <Nav scrollNav={scrollNav}
            as={motion.div} initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: {
                    delay: 0.3, duration: 1
                }
            }}
            exit={{
                opacity: 0
            }}>
                <NavbarContainer>

                    <NavLogo onClick={toggleHome}
                    as={motion.div} initial={{ x: -150, opacity: 0 }}
                    animate={{
                        x: 0, opacity: 1, transition: {
                            delay: 0.3, duration: 1
                        }
                    }}
                    exit={{ x: -100, opacity: 0 }}>
                        Matrix Bank
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            {... smoothScrollSet}> Sobre </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            {... smoothScrollSet}> Descubra </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            {... smoothScrollSet}> Serviços </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            {... smoothScrollSet}> Abrir conta </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Entrar</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
            </AnimatePresence>
        </>
    )
}

export default Navbar
