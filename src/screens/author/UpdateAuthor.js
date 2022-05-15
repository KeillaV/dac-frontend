import React from 'react';
import './Author.css';

import 'bootswatch/dist/minty/bootstrap.css';
import AuthorFields from './AuthorFields';

export default class CreateAuthor extends React.Component {

  render() {
    return (
      <div>
        <AuthorFields title= "Atualizar autor" btn="Atualizar"/>
      </div>
    );
  }
}