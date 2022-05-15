import React from 'react';
import '../../App.css';

import { withRouter } from 'react-router-dom';
import 'bootswatch/dist/minty/bootstrap.css';

export default class FindAllBook extends React.Component {

    render() {
        return (
            <div class="principal">
                <h1 class="cabecalho">Todos os livros</h1>
                <div class="list-group">
                     <a href="/book/find" class="list-group-item list-group-item-action">Livro 1</a>
                     <a href="/book/find" class="list-group-item list-group-item-action">Livro 2</a>
                     <a href="/book/find" class="list-group-item list-group-item-action">Livro 3</a>
                     <a href="/book/find" class="list-group-item list-group-item-action">Livro 4</a>
                     <a href="/book/find" class="list-group-item list-group-item-action">Livro 5</a>
                </div>
            </div>
        );
    }
}