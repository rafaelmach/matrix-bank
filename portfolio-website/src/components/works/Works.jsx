import "./works.scss"
import mobile from "../../assets/mobile.png"
import webdev2 from "../../assets/webdev2.jpg"
import arrow from "../../assets/arrow.png"

const Works = () => {
    return (
        <div className="works" id="works">
           <div className="slider">
               <div className="container">
                   <div className="item">
                       <div className="left">
                           <div className="leftContainer">
                               <div className="imgContainer">
                                   <img src={mobile} alt="" />
                               </div>
                               <h2>Título</h2>
                               <p>Descrição do Projeto</p>
                               <span>Projetos</span>
                           </div>
                       </div>
                       <div className="right">
                           <img 
                           src={webdev2} 
                           alt="" />
                       </div>
                   </div>
               </div>
           </div>
           <img src={arrow} className="arrow left" alt="seta do slider" />
           <img src={arrow} className="arrow right" alt="seta do slider" />
        </div>
    )
}

export default Works
