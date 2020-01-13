import React, { Component, Fragment } from 'react';
import Events from './components/Events'

import Api from '../../services/api'

import Container from './styles';

export default class Main extends Component {
  state = {
    events: [],
    eventInput: "",
    cityInput: ""
  }

  async componentDidMount() {
    const response = await Api.get('/events')
    this.setState({ events: response.data.docs })
  }

  searchEvent = async (e) => {
    e.preventDefault()
    let filters = ''
    if(this.state.eventInput !== ""){
      filters = filters + `title=${this.state.eventInput}&`
    }
    if(this.state.cityInput !== ""){
      filters = filters + `city=${this.state.cityInput}`
    }
    console.log(filters)
    const response = await Api.get(`/events?${filters}`)
    console.log(response)
    this.setState({ events: response.data.docs })
  }
  
  render() {
    return (
    <Fragment>
      <Container>
        <form onSubmit={this.searchEvent}>
          <input type="text" placeholder= "Evento" value={this.state.eventInput} 
          onChange={e => this.setState({ eventInput: e.target.value })}/>
          <input type="text" placeholder= "Cidade"value={this.state.cityInput}
          onChange={e => this.setState({ cityInput: e.target.value })}/>
          <button type="submit">BUSCAR</button>
        </form>
      </Container>
      <Events events= {this.state.events}/>
    </Fragment>
    )
  }
}