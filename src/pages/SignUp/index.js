import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";

import { Form, Container } from "./styles";

import api from "../../services/api";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    socument: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password, document } = this.state;
    if (!name || !email || ! document || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { name, email, password, document });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
           <input
            type="text"
            placeholder="Documento"
            onChange={e => this.setState({ document: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/signin">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);