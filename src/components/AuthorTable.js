import React from "react";
import '../screens/author/Author.css';

import 'bootswatch/dist/minty/bootstrap.css';

export default props => {

    const rows = props.authors.map(author => {
        return (
            <tr class="table-light" key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
                <td>{author.literaryStyle}</td>
                <td>{author.birthDate}</td>
                <td>
                    <button
                        type="button" title="Atualizar"
                        className="btn btn-warning"
                        onClick={e => props.update(author.id)}>
                        Atualizar
                    </button>
                    <button
                        type="button" title="Excluir"
                        className="btn btn-danger"
                        onClick={e => props.delete(author.id)}>
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
                    <th scope="col">Nome</th>
                    <th scope="col">Estilo literário</th>
                    <th scope="col">Data de nascimento</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}