import React from 'react';
import * as moment from 'moment'; 
import 'moment/locale/pt-br';

import { Container, Events } from './styles';


const events = ({events}) => (
  <Container>
  <Events>
    {events.map( event => (
      <div className="card">
        <header>
          <img src={event.urlImage} alt="Evento"/>
        </header>
      <ul>
        <li>
          <p className="date">{`${moment(event.date).locale('pt-br').format('llll')}`}</p>
        </li>
        <li>
          <p className="title">{`${event.name}`}</p>
        </li>
        <li>
          <p className="institute">{`${event.institute}`}</p>
        </li>
      </ul>
      </div>
    ) )}
  </Events>
</Container>
)

export default events
