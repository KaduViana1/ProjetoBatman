import React from "react";
import Header from "../../components/header/header";
import './contatostyles.css'
import Footer from "../../components/footer/footer"

function Contato(){
    return(
        <>
        <Header />
        <div id="contato">
            <div className="image"/>
            <span className="span">Fale Conosco</span>
            <form id="Formulario" action="./contato.js">
                <label for="Nome" className="Labels">Nome</label>
                <input id="Nome" type="text" name="Nome" className="Formulario" />

                <label for="Email" className="Labels">Email</label>
                <input id="Email" type="email" name="Email" className="Formulario" />

                <label for="Mensagem" id="msglabel">Mensagem</label>
                <textarea id="Mensagem" name="Mensagem" rows="20" ></textarea>

                <button className="Botao">Enviar</button>
                </form>
                <Footer />
        </div>
        </>
    )
}

export default Contato