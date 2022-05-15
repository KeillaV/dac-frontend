import React from "react";
import './App.css';

export default class Home extends React.Component {

    render() {
        return (
            <div class="principal">
                <br/>
                <br/>
                <h1 class="cabecalho">Seja bem-vindo(a)!</h1>
                <h3 class="texto">Nossa biblioteca dispõe de informações sobre diversos livros e seus autores, aproveite!</h3>
                <h4 class="texto">Projeto desenvolvido para a disciplina de DAC</h4>
            </div>
        );
    }
}