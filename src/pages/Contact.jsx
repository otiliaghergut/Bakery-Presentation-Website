import "./Contact.css";
import { BsClockFill } from "react-icons/bs"
import { BiPhoneCall } from "react-icons/bi"
import Map from "./Map.jsx";
import ContactForm from "./ContactForm/ContactForm";


const Contact = () => {
    return(
        <div className="container">
            <div className="welcome-text">Tell me how can I help you
                <br></br>
                <BiPhoneCall style={{height:"1.2em", width:"1.2rem"}}/> 0771220571 
            </div>
            <div className="box-wrapper">
                <div className="box-wrapper-icon"><BsClockFill style={{height:"1.5em", width:"1.5rem",color: "rgb(95, 57, 87)" }}/>
                </div>
                <div className="box-wrapper-text1">
                    <span>
                    <span style={{color: "rgb(95, 57, 87)",  fontSize: "25px", letterSpacing: "4px"}}>MONDAY - SATURDAY</span>
                    <br></br>
                    09:00 - 15:00
                    </span>
                    <br></br>
                </div>
                <div className="box-wrapper-text2">
                    <span>
                    <span style={{color: "rgb(95, 57, 87)", fontSize: "25px",  letterSpacing: "4px"}}>SUNDAY </span>
                    <br></br>
                    close
                    </span>
                </div>
            </div>
            <div className="map"><Map /></div>
            <div className="contactForm"><ContactForm /></div>
        </div>
    )
};

export default Contact;