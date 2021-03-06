import React from 'react';
import '../../App.css';

import axios from 'axios';
import 'bootswatch/dist/minty/bootstrap.css';

export default class CreateBook extends React.Component {

  state = {
    title: "",
    summary: "",
    genre: "",
    authorName: "",
    pages: 0,
    yearOfPublication: 0
  }

  create = () => {
    axios.post('http://localhost:8080/api/book',
      {
        title: this.state.title,
        summary: this.state.summary,
        genre: this.state.genre,
        authorName: this.state.authorName,
        pages: this.state.pages,
        yearOfPublication: this.state.yearOfPublication
      }
    ).then(response =>
      {
        alert("Livro criado com sucesso!");
        console.log(response);
        this.props.history.push("/book/all");
      }
    ).catch(error =>
      {
        alert("Ocorreu um erro ao cadastrar o livro, tente novamente!");
        console.log(error.response);
      }
    );
  }

  cancel = () => {
    this.props.history.push("/book/all");
  }
  
  render() {
    return (
      <div className="principal">
      <h1 class="cabecalho">Cadastrar novo livro</h1>
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
          <button onClick={this.create} type="button" className="btn btn-light">Cadastrar</button>
          <button onClick={this.cancel} type="button" className="btn btn-danger">Cancelar</button>
      </form>
  </div>
    );
  }
}