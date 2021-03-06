import React from 'react';
import './Author.css';

import 'bootswatch/dist/minty/bootstrap.css';
import axios from 'axios';

export default class UpdateAuthor extends React.Component {

  state = {
    id: "",
    name: "",
    literaryStyle: "",
    birthDate: ""
  }

  findById = (authorId) => {
    axios.get(`http://localhost:8080/api/author/${authorId}`
    ).then(response =>
      {
        const author = response.data;
        const id = author.id;
        const name = author.name;
        const literaryStyle = author.literaryStyle;
        const birthDate = author.birthDate;

        this.setState({id, name, literaryStyle, birthDate});
      }
    ).catch(error =>
      {
        console.log(error.response);
      }
    );
  }

  update = () => {
      axios.put(`http://localhost:8080/api/author/${this.state.id}`,
      {
        name: this.state.name,
        literaryStyle: this.state.literaryStyle,
        birthDate: this.state.birthDate
      }
    ).then(response =>
      {
        alert("Autor atualizado com sucesso!");
        console.log(response);
        this.props.history.push("/author/all");
      }
    ).catch(error =>
      {
        alert("Ocorreu um erro ao atualizar o autor, tente novamente!");
        console.log(error.response);
      }
    );
  }

  cancel = () => {
    this.props.history.push("/author/all");
  }

  componentDidMount() {
    const params = this.props.match.params;
    const id = params.id;
    this.findById(id);
  }

  render() {
    return (
    <div className="principal">
      <h1 class="cabecalho">Atualizar autor</h1>
      <form action='' className='formulario'>
        <div class="row d-flex justify-content-center">
          <div className="form-group">
            <label className="form-label mt-4" for="id">Id</label>
            <input type="number" className="form-control-small" id="id" value={this.state.id} disabled={true} onChange={(e) => {this.setState({id: e.target.value})}}/>
          </div>

          <div className="form-group">
            <label className="form-label mt-4" for="nome">Nome</label>
            <input type="text" className="form-control" id="nome" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
          </div>

          <div className="form-group">
            <label className="form-label mt-4" for="estiloLit">Estilo liter??rio</label>
            <input type="text" className="form-control" id="estiloLit" value={this.state.literaryStyle} onChange={(e) => {this.setState({literaryStyle: e.target.value})}}/>
          </div>

          <div className="form-group">
            <label className="form-label mt-4" for="data">Data de nascimento</label>
            <input type="date" className="form-control-small" id="data" value={this.state.birthDate} onChange={(e) => {this.setState({birthDate: e.target.value})}}/>
          </div>
        </div>
        <button onClick={this.update} type="button" className="btn btn-light">Atualizar</button>
        <button onClick={this.cancel} type="button" className="btn btn-danger">Cancelar</button>
      </form>
    </div>
    );
  }
}