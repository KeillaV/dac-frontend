import React from 'react';
import './Book.css';

import 'bootswatch/dist/minty/bootstrap.css';

export default class BookFields extends React.Component {

    state = {
        title: "",
        summary: "",
        genre: "",
        authorName: "",
        pages: 0,
        yearOfPublication: 0
    }
    
    create = () => {
        console.log("Título: " + this.state.title +
        "\nSinopse: " + this.state.summary +
        "\nGênero: " + this.state.genre +
        "\nNome do autor: " + this.state.authorName +
        "\nPáginas: " + this.state.pages +
        "\nAno de publicação: " + this.state.yearOfPublication);
    }
    
    render() {
        return (
            <div className="principal">
                <h1 class="cabecalho">{this.props.title}</h1>
                <form action='' className='formulario'>
                    <div class="row d-flex justify-content-center">
                        <div className="form-group">
                            <label className="form-label mt-4" for="title">Título</label>
                            <input type="text" className="form-control" id="title" value={this.state.title} onChange={(e) => {this.setState({title: e.target.value})}}/>
                        </div>

                        <div class="form-group">
                            <label for="summary" class="form-label mt-4">Sinopse</label>
                            <textarea type="text" class="form-control" id="summary" rows="3" value={this.state.summary} onChange={(e) => {this.setState({summary: e.target.value})}}></textarea>
                        </div>

                        <div className="form-group">
                            <label className="form-label mt-4" for="genre">Gênero</label>
                            <input type="text" className="form-control" id="genre" value={this.state.genre} onChange={(e) => {this.setState({genre: e.target.value})}}/>
                        </div>

                        <div className="form-group">
                            <label className="form-label mt-4" for="authorName">Nome do autor</label>
                            <input type="text" className="form-control" id="authorName" value={this.state.authorName} onChange={(e) => {this.setState({authorName: e.target.value})}}/>
                        </div>

                        <div className="form-group">
                            <label className="form-label mt-4" for="pages">Páginas</label>
                            <input type="number" className="form-control-small" id="pages" value={this.state.pages} onChange={(e) => {this.setState({pages: e.target.value})}}/>
                        </div>

                        <div className="form-group">
                            <label className="form-label mt-4" for="yearOfPublication">Ano de publicação</label>
                            <input type="number" className="form-control-small" id="yearOfPublication" value={this.state.yearOfPublication} onChange={(e) => {this.setState({yearOfPublication: e.target.value})}}/>
                        </div>
                    </div>
                    <br/>
                    <button onClick={this.create} type="button" className="btn btn-light">{this.props.btn}</button>
                </form>
            </div>
        );
    }
}