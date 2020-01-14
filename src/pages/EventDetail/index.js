import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";
import Api from '../../services/api'

import { Container } from './styles';

class EventDetail extends React.Component {
  state = {
    event: "",
    userIsParticipant: false
  }

  userIsParticipant() {
    const { participants } = this.state.event
    const idUser = localStorage.getItem("@MbUser")
    let found = participants.find(participant => participant === idUser)
    if (found) return true 
    return false
  }
  
  async componentDidMount () {
    const response = await Api.get(`events/${this.props.location.state.event._id}`)
    console.log(response.data)
    this.setState({ event: response.data })
    this.setState({ userIsParticipant: this.userIsParticipant() })
  }
  
  handleClick = async (e) =>{
    console.log(this.state.userIsParticipant)
    console.log(localStorage.getItem("@MbUser"))
    if(!isAuthenticated()){
      this.props.history.push("/signin");
    }
    if(this.state.userIsParticipant){
      console.log(localStorage.getItem("@MbUser"))
      const response = await Api.delete(`/attendence/${this.state.event._id}`, { data: {attendant: localStorage.getItem("@MbUser")}})
      this.setState({ event: response.data })
      this.setState({ userIsParticipant: this.userIsParticipant() })
    } else {
      const response = await Api.post(`/attendence/${this.state.event._id}`, {attendant: localStorage.getItem("@MbUser")})
      this.setState({ event: response.data })
      this.setState({ userIsParticipant: this.userIsParticipant() })
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

