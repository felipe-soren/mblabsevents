import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

import { Container } from './styles';

class EventDetail extends React.Component {
  state = {
    event: ""
  }
  
  componentDidMount () {
    const { event } = this.props.location.state
    this.setState({ event })
  }
  
  handleClick = async (e) =>{
    e.preventDefault()
    console.log(isAuthenticated())
    console.log(localStorage.getItem('@MbUser'))
  }

  render() {
    return(
      <>
      <Container>
        <header><img src={this.state.event.urlImage} alt="Evento"/></header>
        <main>
          <h1>{this.state.event.name}</h1>
          <p>{this.state.event.description}</p>
        </main>
        <aside>
        <button onClick={this.handleClick}>{isAuthenticated() ? "PARTICIPAR" : "FALSE" }</button>
        </aside>
      </Container>
      </>
    )
  }
}

export default withRouter(EventDetail);

