import "./works.scss"
import arrow from "../../assets/arrow.png"
import { dataPortfolio } from "../../constants/dataPortfolio"
import { useState } from "react"

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleClick = (way) => {
        way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : (dataPortfolio.length - 1))
        : setCurrentSlide(currentSlide < dataPortfolio.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        
        <div className="works" id="works">
           <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>

               {dataPortfolio.map((d) => (
               <div className="container">
                   <div className="item">
                       <div className="left">
                           <div className="leftContainer">
                               <div className="imgContainer">
                                   <img src={d.icon} alt="" />
                               </div>
                               <h2>{d.title}</h2>
                               <p>{d.desc}</p>
                               <span>Projetos</span>
                               {/* Acima vai ser um botão do Material UI */}
                           </div>
                       </div>
                       <div className="right">
                           <img 
                           src={d.img} 
                           alt="" />
                       </div>
                   </div>
               </div>
                ))}
           </div>
           <img src={arrow} className="arrow left" alt="seta do slider" 
           onClick={() => handleClick("left")} />

           <img src={arrow} className="arrow right" alt="seta do slider"
           onClick={() => handleClick("right")} />
           
        </div>
    )
}

export default Works
