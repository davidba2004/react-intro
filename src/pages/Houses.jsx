import "./../css/Houses.css";
import House from "../components/House"

const Houses = () => {
    return (
        <main id="contact" className="main-content">
            <h2>Houses</h2>
            <div className="columns"></div>
                <House name="Farm House" num-bedrooms="5" />
                <House name="Mansion" num-bedrooms="10" />
                <House name="Family Home" num-bedrooms="3" />
        </main>
    )
};

export default Houses;