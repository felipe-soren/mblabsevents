import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Api from "../../services/api";

// import { Container } from "./styles";

class EventConfirmation extends Component {
  state = {
    event: ""
  }
  async componentDidMount() {
    const response = await Api.post(`/attendence/${this.props.match.params.name}`)
    this.setState({ event: response.data })
  }

  render() {
    return (
      <h1>Parabéns! Seu ingresso para o evento {this.state.event.name} foi confirmado. Não se esqueça de levar 
      o documento cadastrado em seu perfil! Clique <a href="/eventos">aqui</a> para verificar os eventos que você está participando
      </h1>
    );
  }
}

export default withRouter(EventConfirmation);