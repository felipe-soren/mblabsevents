import React, { Component } from 'react';
import logo from '../../assets/logo.png'

import { Container } from './styles';

export default class header extends Component {
  render() {
    return ( 
      <Container>
        <a href="teste">Home</a>

        <nav>
          <li><a href="teste">Home</a></li>
          <li><a href="teste">Login</a></li>
        </nav>
      </Container>
    );
  }
}
