import "./app.scss"
import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import WorkExperience from "./components/workExperience/WorkExperience"
import Topbar from "./components/topbar/Topbar"
import Works from "./components/works/Works"
import { useState } from "react"
import Menu from "./components/menu/Menu"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <div className="sections">
        
        <Intro/>
        <WorkExperience/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
