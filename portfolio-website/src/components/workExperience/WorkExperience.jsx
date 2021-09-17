import "./workExperience.scss"
import { data } from "../../constants/dataWorkExp"


const WorkExperience = () => {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Conhecimentos</h1>
            <div className="container">

                {data.map((card) => (

                    <div className="card">
                    <div className="top">
                        
                    <img src={card.img} alt="" />
                        
                    </div>
                    <div className="title">
                        <h3>{card.title}</h3>
                    </div>
                    <div className="bottom">
                    {card.desc}
                    </div>
                   
                </div>
                    ))}
            </div>
        </div>
    )
}

export default WorkExperience
