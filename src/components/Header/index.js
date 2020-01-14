import React, { Component, useEffect } from 'react';
import logo from '../../assets/logomb.jpg'
import { isAuthenticated, logout } from "../../services/auth";

import { Container } from './styles';

export default class header extends Component {
  state = {
    authenticated: false
  }

  componentDidMount() {
    this.setState( { authenticated: isAuthenticated() } )
  }
  
  handleClick = async (e) =>{
    e.preventDefault()
    logout()
    this.setState( { authenticated: isAuthenticated() } )
  }
  
  render() {
    return ( 
      <Container>
        <a href="/app"><img src={logo} alt="Home" /></a>

        <nav>
          <li><a href="/sigin">Login</a></li>
          <li><a href="/signup">Cadastre-se</a></li>
          {this.state.authenticated ? (<li><a onClick={this.handleClick} href="/app">Sair</a></li>) : ("")}
        </nav>
      </Container>
    );
  }
}
