import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../../../services/auth";

import { Container } from './styles';

class TicketInfo extends Component {

  handleClick = async (e) =>{
    console.log(this.props)
    if(!isAuthenticated()){
      window.location.href = '/signin';
    } else {
      console.log(this.props)
      e.preventDefault()
      window.location.href = `https://checkoutmp.herokuapp.com/payments/checkout/${this.props.event._id}/comprador@gmail.com/ingresso 
      ${this.props.event.name}/${this.props.event.price}`;  
    }
  }

  render() {
    return (
      <Container>
      <ul className="box">
      <li className="title">
        INGRESSOS
      </li>
      <li className="ticket">
        <div className="info">
          <p className="type">Ingresso</p>
          <p className="price">R$ {this.props.event.price}</p>
        </div>
        <p className="sample">Parcele em até 3x</p>
      </li>
      <li className="total">
        <div className="t-info">
        {this.props.isParticipant ? (<p className="price">Você já possui ingresso</p>) : 
        (<><p className="price">TOTAL: R$ {this.props.event.price}</p>
        <button type="submit" onClick={this.handleClick}>COMPRAR</button> </>)}
          </div>
      </li>
    </ul>
    <a href="">Fale com o organizador</a>
</Container>
    );
  }
}

export default TicketInfo;
