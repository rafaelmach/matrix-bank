import "./intro.scss"
import webDeveloper from "../../assets/webDev.jpg"
// import downArrow from "../../assets/down.png"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={webDeveloper} alt="Web Developer trabalhando no PC" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Olá! Eu sou</h2>
                    <h1>Rafael Machado</h1>
                    <h3>Web Developer <span></span></h3>
                </div>
                <a href="#portfolio">
                {/* <img src={downArrow} alt="Seta para Baixo" />  */}
                <ExpandMoreIcon className="icon" />
                </a>

            </div>
        </div>
    )
}

export default Intro
