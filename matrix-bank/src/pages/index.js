import {useState} from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DiscoverSection from '../components/DiscoverSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import SignUpSection from '../components/SignUpSection'
import Footer from '../components/Footer'

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
         <AboutSection />
         <DiscoverSection />
         <ServicesSection />
         <SignUpSection />
         <Footer />
        </>
    )
}

export default Home
