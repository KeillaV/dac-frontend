import React from 'react';
import './Author.css';

export default class AuthorFields extends React.Component {

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
            <h1 class="cabecalho">{this.props.title}</h1>
            <form action='' className='formulario'>
              <div class="row d-flex justify-content-center">
                <div className="form-group">
                  <label className="form-label mt-4" for="nome">Nome</label>
                  <input type="text" className="form-control" id="nome" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
                </div>

                <div className="form-group">
                  <label className="form-label mt-4" for="estiloLit">Estilo literário</label>
                  <input type="text" className="form-control" id="estiloLit" value={this.state.literaryStyle} onChange={(e) => {this.setState({literaryStyle: e.target.value})}}/>
                </div>

                <div className="form-group">
                  <label className="form-label mt-4" for="data">Data de nascimento</label>
                  <input type="date" className="form-control-small" id="data" value={this.state.birthDate} onChange={(e) => {this.setState({birthDate: e.target.value})}}/>
                </div>
              </div>
              <br/>
              <br/>
              <button onClick={this.create} type="button" className="btn btn-light">{this.props.btn}</button>
            </form>
          </div>
        );
    }
}