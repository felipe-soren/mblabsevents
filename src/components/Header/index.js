import React, { Component } from 'react';
import logo from '../../assets/logomb.jpg'

import { Link } from "react-router-dom";
import { Container } from './styles';

export default class header extends Component {
  render() {
    return ( 
      <Container>
        <a href="/app"><img src={logo} alt="Home" /></a>

        <nav>
          <li><a href="/sigin">Login</a></li>
          <li><a href="/signup">Cadastre-se</a></li>
        </nav>
      </Container>
    );
  }
}
