import React, { Component } from 'react';

import { Container } from './styles';

// const TicketInfo = () => (
//   <Container>
//   <h1>{this.props.event}</h1>
//   <ul className="box">
//   <li className="title">
//     INGRESSOS
//   </li>
//   <li className="ticket">
//     <div className="info">
//       <p className="type">Ingresso</p>
//       <p className="price">R$ 20,50</p>
//       <p className="qtd">
//         <button>-</button>
//           0
//         <button>+</button>
//       </p>
//     </div>
//     <p className="sample">Parcele em até 3x</p>
//   </li>
//   <li className="total">
//     <div className="t-info">
//       <p className="price">TOTAL: R$ 20,50</p>
//       <button>COMPRAR</button>
//       </div>
//   </li>
// </ul>
// </Container>
// );

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
