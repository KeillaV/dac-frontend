import React from "react";
import '../screens/book/Book.css';

import 'bootswatch/dist/minty/bootstrap.css';

export default props => {

    const rows = props.books.map(book => {
        return (
            <tr class="table-light" key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.summary}</td>
                <td>{book.genre}</td>
                <td>{book.authorName}</td>
                <td>{book.pages}</td>
                <td>{book.yearOfPublication}</td>
                <td>
                    <button
                        type="button" title="Atualizar"
                        className="btn btn-warning"
                        onClick={e => props.update(book.id)}>
                        Atualizar
                    </button>
                    <button
                        type="button" title="Excluir"
                        className="btn btn-danger"
                        onClick={e => props.delete(book.id)}>
                        Excluir
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <table className="table table-hover">
            <thead>
                <tr class="table-light">
                    <th scope="col">Id</th>
                    <th scope="col">Título</th>
                    <th scope="col">Sinopse</th>
                    <th scope="col">Gênero</th>
                    <th scope="col">Nome do autor</th>
                    <th scope="col">Páginas</th>
                    <th scope="col">Ano</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}