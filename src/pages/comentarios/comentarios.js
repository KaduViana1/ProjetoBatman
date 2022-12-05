import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './commentsstyles.css'

function Comentarios(){
    return(
        <>
        <Header/>
        <div className="comentarios">
            <span>Comentarios</span>
        </div>
        <div className="cardPai">
            <div className="cards">
                <div id="cards">
                    <div className="espaço">
                        <div className="letras">{}</div>
                        <div className="letras">Comentario 2</div>
                        <div className="letras">Comentario 3</div>
                        <div className="letras">Comentario 4</div>
                        <div className="letras">Comentario 5</div>
                    </div>
                    <form action="./comentarios.js"></form>
                    <input type="text" id="Nome" className="inputs pequenos" placeholder=" Nome" />
                    <input type="text" id="Sobrenome" className="inputs pequenos" placeholder=" Sobrenome" />
                    <input type="email" id="Email2" className="inputs pequenos" placeholder=" E-mail" />   
                    <textarea name="Comentario" id="Comentario" className="inputs" cols="130" rows="6" placeholder=" Escreva Seu Comentario" ></textarea>
                    <button className="commentButton">Enviar</button>
                </div>
            </div>
                <div className="imagem"></div>
        </div>
        <Footer />
        </>
    )
}

export default Comentarios