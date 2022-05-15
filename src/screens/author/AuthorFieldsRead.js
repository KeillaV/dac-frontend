import React from 'react';
import './Author.css';
import { withRouter } from 'react-router-dom';

class AuthorFieldsRead extends React.Component {

  state = {
    name: "Machado de Assis",
    literaryStyle: "Realismo",
    birthDate: "1808-05-16"
  }

  update = () => {
    this.props.history.push('/author/update');
  }

    render() {
        return (
          <div className="principal">
            <h1 class="cabecalho">{this.state.name}</h1>
              <div class="row d-flex justify-content-center">
                <div className="form-group">
                    <fieldset>
                        <label className="form-label mt-4" for="nome">Nome</label>
                        <input type="text" className="form-control" id="nome" value={this.state.name} />
                    </fieldset>
                </div>
                <div className="form-group">
                    <fieldset>
                        <label className="form-label mt-4" for="estiloLit">Estilo literário</label>
                        <input type="text" className="form-control" id="estiloLit" value={this.state.literaryStyle} />
                    </fieldset>  
                </div>
                <div className="form-group">
                    <fieldset>
                        <label className="form-label mt-4" for="data">Data de nascimento</label>
                        <input type="date" className="form-control-small" id="data" value={this.state.birthDate} />
                    </fieldset> 
                </div>
              </div>
            <br/>
            <br/>
            <button onClick={this.update} type="button" className="btn btn-light">Atualizar campos</button>
          </div>
        );
    }
}

export default withRouter(AuthorFieldsRead);