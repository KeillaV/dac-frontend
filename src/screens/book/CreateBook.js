import React from 'react';
import '../../App.css';

import 'bootswatch/dist/minty/bootstrap.css';
import BookFields from './BookFields';

export default class CreateBook extends React.Component {

  render() {
    return (
      <div>
        <BookFields title= "Cadastrar novo livro" btn="Cadastrar"/>
      </div>
    );
  }
}