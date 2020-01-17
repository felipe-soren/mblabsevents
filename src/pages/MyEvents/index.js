import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Api from "../../services/api"
import Events from "../Main/components/Events"
import { Container } from './styles';

class MyEvents extends Component {
state = {
  events: [],
}

  async componentDidMount(){
    const response = await Api.get('/users')
    this.setState({ events: response.data.attendedEvents })
    console.log(response.data)
  }
  
  render() {
    return (
        <>
        <Container>
          <div>
            <h1>Meus Eventos</h1>
          </div>
        </Container>
        <Events events= {this.state.events}/>
        </>
    );
  }
}

export default withRouter(MyEvents);

