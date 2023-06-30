import "./Map.css"
import React from "react";

const Map = () => {
    return(
        <div className="Map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.6764396952362!2d26.874761800000012!3d47.00732580000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40caba3188ce977d%3A0xc31255158d51ac77!2sStrada%20Stejarului%20112%2C%20S%C4%83b%C4%83oani%20617136!5e0!3m2!1sro!2sro!4v1683652008085!5m2!1sro!2sro" 
            width="700" 
            height="550" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default Map;