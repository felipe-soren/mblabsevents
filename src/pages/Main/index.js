import React, { Component, Fragment } from 'react';
import Grid from './components/Grid'

import Container from './styles';

export default class Main extends Component {
  render() {
    return (
    <Fragment>
      <Container>
        <form action="">
          <input type="text" placeholder= "Evento"/>
          <input type="text" placeholder= "Cidade"/>
          <button type="submit">BUSCAR</button>
        </form>
      </Container>
      <Grid />
    </Fragment>
    )
  }
}