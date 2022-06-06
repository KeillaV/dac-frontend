import React from 'react';
import './Book.css';

import axios from 'axios';
import 'bootswatch/dist/minty/bootstrap.css';

export default class UpdateBook extends React.Component {

  state = {
    id: "",
    title: "",
    summary: "",
    genre: "",
    authorName: "",
    pages: 0,
    yearOfPublication: 0
}

findById = (id) => {
  axios.get(`http://localhost:8080/api/book/${id}`
  ).then(response =>
    {
      const book = response.data;
      const id = book.id;
      const title = book.title;
      const summary = book.summary;
      const genre = book.genre;
      const authorName = book.authorName;
      const pages = book.pages;
      const yearOfPublication = book.yearOfPublication;

      this.setState({id, title, summary, genre, authorName, pages, yearOfPublication});
    }
  ).catch(error =>
    {
      console.log(error.response);
    }
  );
}
  update = () => {
    axios.put(`http://localhost:8080/api/book/${this.state.id}`,
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
        alert("Livro atualizado com sucesso!");
        console.log(response);
        this.props.history.push("/book/all");
      }
    ).catch(error =>
      {
        alert("Ocorreu um erro ao atualizar o livro, tente novamente!");
        console.log(error.response);
      }
    );
  }

  cancel = () => {
    this.props.history.push("/book/all");
  }

  componentDidMount() {
    const params = this.props.match.params;
    const id = params.id;
    this.findById(id);
  }

  render() {
    return (
      <div className="principal">
      <h1 class="cabecalho">Atualizar livro</h1>
      <form action='' className='formulario'>
          <div class="row d-flex justify-content-center">
              <div className="form-group">
                <label className="form-label mt-4" for="id">Id</label>
                <input type="number" className="form-control-small" id="id" disabled={true} value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}}/>
              </div>

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
          <button onClick={this.update} type="button" className="btn btn-light">Atualizar</button>
          <button onClick={this.cancel} type="button" className="btn btn-danger">Cancelar</button>
      </form>
  </div>
    );
  }
}