import React from 'react';
import './Author.css';

import 'bootswatch/dist/minty/bootstrap.css';
import AuthorFieldsRead from './AuthorFieldsRead';

export default class Author extends React.Component {

  render() {
    return (
      <div>
        <AuthorFieldsRead />
      </div>
    );
  }
}