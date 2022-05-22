import React from 'react';
import '../../App.css';

import axios from 'axios';
import AuthorTable from '../../components/AuthorTable';

import 'bootswatch/dist/minty/bootstrap.css';

export default class FindAllAuthor extends React.Component {

    state = {
        id: "",
        authors: []
    }

    find = () => {
        axios.get("http://localhost:8080/api/author"
        ).then(response =>
            {
                const authors = response.data;
                this.setState({authors});
                console.log(authors);
            }
        ).catch(error =>
            {
                console.log(error.response);
            }
        );

    }

    delete = (authorId) => {
        axios.delete(`http://localhost:8080/api/author/${authorId}`
        ).then(response =>
            {
                alert("Autor excluído com sucesso!");
                this.find();
            }
        ).catch(error =>
            {
                alert(error.response);
                console.log(error.response);
            }
        )
    }

    create = () => {
        this.props.history.push("/author/create");
    }

    update = (authorId) => {
        this.props.history.push(`/author/update/${authorId}`)
    }

    render() {
        return (
            <div class="principal">
                <h1 class="cabecalho">Todos os autores</h1>
                <button onClick={this.find} type="button" className="btn btn-light">Buscar autores</button>
                <br/>
                <br/>
                <br/>
                <AuthorTable authors={this.state.authors}
                delete={this.delete}
                update={this.update} /> 
                <br/>
                <br/>
                <button onClick={this.create} type="button" className="btn btn-light">Cadastrar novo autor</button>
            </div>
        );
    }
}