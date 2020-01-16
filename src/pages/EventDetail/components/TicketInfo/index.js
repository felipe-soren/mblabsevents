import React, { Component } from 'react';

import { Container } from './styles';

class TicketInfo extends Component {
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
          <p className="price">R$ {this.props.price}</p>
        </div>
        <p className="sample">Parcele em até 3x</p>
      </li>
      <li className="total">
        <div className="t-info">
          <p className="price">TOTAL: R$ {this.props.price}</p>
          <button>COMPRAR</button>
          </div>
      </li>
    </ul>
</Container>
    );
  }
}

export default TicketInfo;
