import React from 'react';
import './Book.css';

import { withRouter } from 'react-router-dom';

import 'bootswatch/dist/minty/bootstrap.css';

class BookFieldsRead extends React.Component {

    state = {
        title: "Dom Casmurro",
        summary: "Um romance de Machado de Assis",
        genre: "Romance",
        authorName: "Machado de Assis",
        pages: 200,
        yearOfPublication: 1850
    }
    
    update = () => {
        this.props.history.push('/book/update');
    }
    
    render() {
        return (
            <div className="principal">
                <h1 class="cabecalho">{this.state.title}</h1>
                <form action='' className='formulario'>
                    <div class="row d-flex justify-content-center">
                        <div className="form-group">
                            <fieldset>
                                <label className="form-label mt-4" for="title">Título</label>
                                <input type="text" className="form-control" id="title" value={this.state.title} />
                            </fieldset>  
                        </div>
                        <div class="form-group">
                            <fieldset>
                                <label for="summary" class="form-label mt-4">Sinopse</label>
                                <textarea type="text" class="form-control" id="summary" rows="3" value={this.state.summary} ></textarea>
                            </fieldset> 
                        </div>
                        <div className="form-group">
                            <fieldset>
                                <label className="form-label mt-4" for="genre">Gênero</label>
                                <input type="text" className="form-control" id="genre" value={this.state.genre} />
                            </fieldset>
                        </div>
                        <div className="form-group">
                            <fieldset>
                                <label className="form-label mt-4" for="authorName">Nome do autor</label>
                                <input type="text" className="form-control" id="authorName" value={this.state.authorName} />
                            </fieldset>
                        </div>
                        <div className="form-group">
                            <fieldset>
                                <label className="form-label mt-4" for="pages">Páginas</label>
                                <input type="number" className="form-control-small" id="pages" value={this.state.pages} />
                            </fieldset>
                        </div>
                        <div className="form-group">
                            <fieldset>
                                <label className="form-label mt-4" for="yearOfPublication">Ano de publicação</label>
                                <input type="number" className="form-control-small" id="yearOfPublication" value={this.state.yearOfPublication} />
                            </fieldset>
                        </div>
                    </div>
                    <br/>
                    <button onClick={this.update} type="button" className="btn btn-light">Atualizar campos</button>
                </form>
            </div>
        );
    }
}

export default withRouter(BookFieldsRead);