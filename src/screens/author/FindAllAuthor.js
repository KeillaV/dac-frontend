import React from 'react';
import '../../App.css';

import { withRouter } from 'react-router-dom';

import 'bootswatch/dist/minty/bootstrap.css';

export default class FindAllAuthor extends React.Component {

    render() {
        return (
            <div class="principal">
                <h1 class="cabecalho">Todos os autores</h1>
                <div class="list-group">
                     <a href="/author/find" class="list-group-item list-group-item-action">Autor 1</a>
                     <a href="/author/find" class="list-group-item list-group-item-action">Autor 2</a>
                     <a href="/author/find" class="list-group-item list-group-item-action">Autor 3</a>
                     <a href="/author/find" class="list-group-item list-group-item-action">Autor 4</a>
                     <a href="/author/find" class="list-group-item list-group-item-action">Autor 5</a>
                </div>
            </div>
        );
    }
}