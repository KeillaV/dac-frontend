import React from 'react';
import './Book.css';

import 'bootswatch/dist/minty/bootstrap.css';
import BookFields from './BookFields';

export default class CreateBook extends React.Component {

  render() {
    return (
      <div>
        <BookFields title= "Atualizar livro" btn="Atualizar"/>
      </div>
    );
  }
}