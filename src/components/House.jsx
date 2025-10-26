import "../css/House.css"
import housePic from "../images/farmhouse.jpeg";

const House = (props) => {
    return (
        <section>
            <h2>{props}.name</h2>
            <img src={housePic} alt="house" />
        </section>
    )
}

export default House;