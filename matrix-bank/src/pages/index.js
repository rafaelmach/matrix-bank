import {useState} from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/> 
         <HeroSection />
         <AboutSection/>
        </>
    )
}

export default Home
