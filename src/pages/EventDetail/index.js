import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";
import Api from '../../services/api'
import TicketInfo from '../EventDetail/components/TicketInfo'
import * as moment from 'moment';
import 'moment/locale/pt-br';

import { Container } from './styles';

class EventDetail extends React.Component {
  state = {
    event: [],
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
        <ul>
          <li>
            <strong>{this.state.event.name}</strong>
          </li>
          <li>
            <p>{`${this.state.event.institute} - ${this.state.event.city}, ${this.state.event.state}`}</p>
          </li>
          <li>
            <p>{`${moment(this.state.event.date).locale('pt-br').format('llll')}`}</p>
          </li>
        </ul>
          <h1>{this.state.event.name}</h1>
          <p>{this.state.event.description}</p>
        </main>
        <aside>
          {this.state.event.eventType === "Free" ? (<button className="btn" onClick={this.handleClick}>{this.state.userIsParticipant ? "DESISTIR" : "PARTICIPAR" }</button> ) : (<TicketInfo price = {this.state.event.price}/>)}
        </aside>
      </Container>
      </>
    )
  }
}

export default withRouter(EventDetail);

