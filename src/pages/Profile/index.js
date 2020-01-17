import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";
import Api from "../../services/api"

import { Form, Container } from "./styles";

class Profile extends Component {
  state = {
    user: "",
    name: "",
    email: "",
    document: "",
    disabled: true
  };

  async componentDidMount() {
    const response = await Api.get('/users')
    this.setState( { user: response.data } )
  }

  handleClickEdit = async (e) =>{
    e.preventDefault()
    this.setState({ disabled: false })
  }

  handleClickSave = async (e) =>{
    e.preventDefault()
    this.setState({ disabled: true })
    this.updateUserInformation()
  }

  async updateUserInformation() {
    const response = await Api.put('Users', {name: this.state.name})
    console.log(response)
    this.setState({ user: response.data })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <h3>Meu Perfil</h3>
          <input
            disabled={(this.state.disabled)? "disabled" : ""}
            type="text"
            placeholder={this.state.user.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            disabled="disabled"
            type="email"
            placeholder={this.state.user.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
           <input
            disabled={(this.state.disabled)? "disabled" : ""}
            type="text"
            placeholder={this.state.user.document}
            onChange={e => this.setState({ document: e.target.value })}
          />
          {this.state.disabled ? 
          (<button onClick={this.handleClickEdit}>
            Editar
          </button>) : (
          <button onClick={this.handleClickSave}>
            Salvar
          </button>)}
          <hr />
        </Form>
      </Container>
    );
  }
}

export default withRouter(Profile);