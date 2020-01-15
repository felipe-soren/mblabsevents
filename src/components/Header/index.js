import React, { Component, Fragment } from 'react';
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
    window.location.reload();
  }
  
  render() {
    return ( 
      <Container>
        <a href="/app"><img src={logo} alt="Home" /></a>

        <nav>
          {this.state.authenticated ? (
          <>
          <li><a onClick={this.handleClick} href="/app">Sair</a></li>
          <li><a href="/eventos">Meus Eventos</a></li>
          </>
          ) : (
            <>
            <li><a href="/signin">Login</a></li>
            <li><a href="/signup">Cadastre-se</a></li>
            </>
          )}
        </nav>
      </Container>
    );
  }
}
