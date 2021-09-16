import "./intro.scss"
import webDeveloper from "../../assets/webDev.jpg"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

const Intro = () => {

    const textRef = useRef()

   useEffect(() => {
    init(textRef.current, { 
        showCursor: true,
        backDelay:1700,
        backSpeed:60,
        strings: ["Front end"] })
   }, [])

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
                    <h3>Desenvolvedor Web <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                <ExpandMoreIcon className="icon" />
                </a>

            </div>
        </div>
    )
}

export default Intro
