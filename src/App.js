import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    name: "",
    literaryStyle: "",
    birthDate: ""
  }

  create = () => {
      console.log("Nome: " + this.state.name +
      "\nEstilo literário: " + this.state.literaryStyle +
      "\nData de nascimento: " + this.state.birthDate);
  }

  render() {
    return (
      <div className="principal">
        <h1 class="cabecalho">Cadastrar novo autor</h1>
        <form action='' className='formulario'>
          <label>Nome: </label>
          <input className='box' type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
          <label>Estilo literário: </label>
          <input className='box' type="text" value={this.state.literaryStyle} onChange={(e) => {this.setState({literaryStyle: e.target.value})}} />
          <label>Data de nascimento: </label>
          <input className='small-box' type="date" value={this.state.birthDate} onChange={(e) => {this.setState({birthDate: e.target.value})}} />
          <br/>
          <input className="botao" type="button" value="Cadastrar" onClick={this.create}/>
        </form>
      </div>
    );
  }
}