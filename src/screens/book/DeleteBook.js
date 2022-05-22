import React from 'react';
import './Book.css';

import 'bootswatch/dist/minty/bootstrap.css';
import axios from 'axios';

export default class DeleteBook extends React.Component {

    state = {
        id: 0
    }

    delete = () => {
        axios.delete(`http://localhost:8080/api/book/${this.state.id}`
        ).then(response =>
            {
                alert("Livro excluído com sucesso!");
                this.props.history.push("/book/all");
            }
        ).catch(error =>
            {
                alert("Ocorreu um erro ao excluir o livro, tente novamente!");
                console.log(error.response);
            }
        )
    }

    cancel = () => {
        this.props.history.push("/book/all");
      }

    render() {
        return (
        <div className="principal">
          <h1 class="cabecalho">Excluir livro</h1>
          <form action='' className='formulario'>
            <div class="row d-flex justify-content-center">
              <div className="form-group">
                <label className="form-label mt-4" for="id">Id</label>
                <input type="number" className="form-control-small" id="id" value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}}/>
              </div>
            </div>
            <button onClick={this.delete} type="button" className="btn btn-danger">Excluir</button>
            <button onClick={this.cancel} type="button" className="btn btn-light">Cancelar</button>
          </form>
        </div>
        );
      }
}