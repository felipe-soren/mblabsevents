import React, { Component } from 'react';
import Api from '../../../../services/api'

import { Test } from './styles';

export default class Grid extends Component {
  state = {
    events: []
  }

  async componentDidMount() {
    const response = await Api.get('/events')
    this.setState({ events: response.data.docs })
    console.log(this.state.events)
  }
  render() {
    return (
    <Test>
      <div className="cards">
        {this.state.events.map( event => (
        <div className="card">{event.name}</div> 
        ) )}
      </div>
    </Test>
    )
  }
}
