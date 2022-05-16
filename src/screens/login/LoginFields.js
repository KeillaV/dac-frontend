import React from 'react';
import './Login.css';

import { withRouter } from 'react-router-dom';

class LoginFields extends React.Component {

    state = {
        email: "",
        password: ""
    }

    login = () => {
        if (this.state.email == "monteiro@ifpb.edu.br" && this.state.password == "123") {
            this.props.history.push('/');
        } else {
            alert("Login inválido! Tente novamente!");
        }
    }

    render() {
        return (
            <div className="principal">
                <h1 class="cabecalho">Login de usuário</h1>
                <div class="row d-flex justify-content-center">
                    <div className="form-group">
                        <label className="form-label mt-4" for="email">Email</label>
                        <input type="text" className="form-login" id="email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4" for="password">Senha</label>
                        <input type="password" className="form-login" id="password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}}/>
                    </div>
                </div>
                <br/>
                <button onClick={this.login} type="button" className="botao">Login</button>
            </div>
        );
    }
}

export default withRouter(LoginFields);