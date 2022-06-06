import React from 'react';
import '../../App.css';

import BookTable from '../../components/BookTable';
import axios from 'axios';
import 'bootswatch/dist/minty/bootstrap.css';

export default class FindAllBook extends React.Component {

    state = {
        id: "",
        books: []
    }

    find = () => {
        axios.get("http://localhost:8080/api/book"
        ).then(response =>
            {
                const books = response.data;
                this.setState({books});
                console.log(books);
            }
        ).catch(error =>
            {
                console.log(error.response);
            }
        );

    }

    delete = (bookId) => {
        axios.delete(`http://localhost:8080/api/book/${bookId}`
        ).then(response =>
            {
                alert("Livro excluído com sucesso!");
                console.log(response);
                this.find();
            }
        ).catch(error =>
            {
                alert("Ocorreu um erro ao excluir o livro, tente novamente!");
                console.log(error.response);
            })
    }

    create = () => {
        this.props.history.push("/book/create");
    }

    update = (authorId) => {
        this.props.history.push(`/book/update/${authorId}`)
    }

    componentDidMount() {
        this.find();
    }

    render() {
        return (
            <div class="principal">
                <h1 class="cabecalho">Todos os livros</h1>
                <br/>
                <br/>
                <br/>
                <BookTable books={this.state.books}
                delete={this.delete}
                update={this.update} /> 
                <br/>
                <br/>
                <button onClick={this.create} type="button" className="btn btn-light">Cadastrar novo livro</button>
            </div>
        );
    }
}