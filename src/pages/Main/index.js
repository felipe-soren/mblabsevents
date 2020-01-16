import React, { Component, Fragment } from 'react';
import Events from './components/Events'

import Api from '../../services/api'

import Container from './styles';

export default class Main extends Component {
  state = {
    events: [],
    eventInput: "",
    cityInput: "",
    eventTypeSelect: "",
    isLoading: true,
  }

  async componentDidMount() {
    const response = await Api.get('/events')
    this.setState({ events: response.data.docs })
    this.setState({ isLoading: false })
  }

  searchEvent = async (e) => {
    e.preventDefault()
    let filters = ''
    if(this.state.eventInput !== ""){
      filters = filters + `title=${this.state.eventInput}&`
    }
    if(this.state.cityInput !== ""){
      filters = filters + `city=${this.state.cityInput}&`
    }
    if(this.state.eventTypeSelect === "gratuitos") {
      filters = filters + `type=free`
    } 
    if(this.state.eventTypeSelect === "pagos") {
      filters = filters + `type=paid`
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
          <input className="event" type="text" placeholder= "Evento" value={this.state.eventInput} 
          onChange={e => this.setState({ eventInput: e.target.value })}/>
          <input className="city" type="text" placeholder= "Cidade"value={this.state.cityInput}
          onChange={e => this.setState({ cityInput: e.target.value })}/>
          <select value={this.state.eventTypeSelect} onChange={e => this.setState({ eventTypeSelect: e.target.value })}>
            <option defaultValue="todos">Todos</option>
            <option value="pagos">Pagos</option>
            <option value="gratuitos">Gratuitos</option>
          </select>
          <button type="submit">BUSCAR</button>
        </form>
      </Container>
      {this.state.isLoading ? (<h1>Carregando</h1>) : (<Events events= {this.state.events}/>)}
    </Fragment>
    )
  }
}