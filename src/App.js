import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    title: "",
    summary: "",
    genre: "",
    authorName: "",
    pages: 0,
    yearOfPublication: 0
  }

  create = () => {
    alert("Livro cadastrado com sucesso!");
  }

  render() {
    return (
      <div className="App">
          <div className='cabecalho'>
            <h1 class="cabecalho">Cadastrar novo livro</h1>
          </div>
          <form action='' className='formulario'>
            <div>
                <label>Título: </label>
                <input className='box' type="text" value={this.state.title} onChange={(e) => {this.setState({title: e.target.value})}} />
                <label>Sinopse: </label>
                <input className='box' type="text" value={this.state.summary} onChange={(e) => {this.setState({summary: e.target.value})}} />
                <label>Gênero: </label>
                <input className='box' type="text" value={this.state.genre} onChange={(e) => {this.setState({genre: e.target.value})}} />
                <label>Nome do autor: </label>              
                <input className='box' type="text" value={this.state.authorName} onChange={(e) => {this.setState({authorName: e.target.value})}} />
                <label>Páginas: </label>
                <input className='box-number' type="number" value={this.state.pages} onChange={(e) => {this.setState({pages: e.target.value})}} />
                <label>Ano de publicação: </label>
                <input className='box-number' type="number" value={this.state.yearOfPublication} onChange={(e) => {this.setState({yearOfPublication: e.target.value})}} />
              </div>
              <input className="botao" type="button" value="Cadastrar" onClick={this.create}/>
          </form>
      </div>
    );
  }
}