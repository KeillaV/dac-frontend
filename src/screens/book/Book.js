import React from 'react';
import './Book.css';

import 'bootswatch/dist/minty/bootstrap.css';
import BookFieldsRead from './BookFieldsRead';

export default class Book extends React.Component {

  render() {
    return (
      <div>
        <BookFieldsRead />
      </div>
    );
  }
}