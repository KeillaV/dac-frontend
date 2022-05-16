import React from 'react';
import './Login.css';

import 'bootswatch/dist/minty/bootstrap.css';
import LoginFields from './LoginFields';

export default class Login extends React.Component {

  render() {
    return (
      <div>
        <LoginFields />
      </div>
    );
  }
}