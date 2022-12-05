import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css'

function Fotos(){
    return(
        <>
        <Header />
        <div id="Fotos">
            <span>FOTOS</span>
        </div>
        <div id="Photos">
            <div className="photos" id="image-1"></div>
            <div className="photos" id="image-2"></div>
            <div className="photos" id="image-3"></div>
            <div className="photos" id="image-4"></div>
            <div className="photos" id="image-5"></div>
            <div className="photos" id="image-6"></div>
            <div className="photos" id="image-7"></div>
            <div className="photos" id="image-8"></div>
            <div className="photos" id="image-9"></div>
        </div>
        <Footer/>
        </>
        
            
        
    )
}

export default Fotos