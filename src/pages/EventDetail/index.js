import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

import { Container } from './styles';

class EventDetail extends React.Component {
  state = {
    event: "",
    userIsParticipant: false
  }

  userIsParticipant() {
    const { participants } = this.props.location.state.event
    const idUser = localStorage.getItem("@MbUser")
    let found = participants.find(participant => participant === idUser)
    if (found) return true 
    return false
  }
  
  async componentDidMount () {
    const { event } = this.props.location.state
    this.setState({ event })
    this.setState({ userIsParticipant: this.userIsParticipant() })
  }
  
  handleClick = async (e) =>{
    console.log(this.state.userIsParticipant)
    if(!isAuthenticated()){
      this.props.history.push("/signin");
    }
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
        <button onClick={this.handleClick}>{this.state.userIsParticipant ? "DESISTIR" : "PARTICIPAR" }</button>
        </aside>
      </Container>
      </>
    )
  }
}

export default withRouter(EventDetail);

