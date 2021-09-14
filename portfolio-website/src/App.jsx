import "./app.scss"
import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Topbar from "./components/topbar/Topbar"
import Works from "./components/works/Works"


function App() {
  return (
    <div className="app">
      <Topbar/>
      
      <div className="sections">
        
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
