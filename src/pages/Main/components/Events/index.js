import React from 'react';
import { Link } from "react-router-dom";
import * as moment from 'moment'; 
import 'moment/locale/pt-br';

import { Container } from './styles';


const events = ({events}) => (
  <Container>
    {events.map( event => (
    <div className="box">
      <div className="card">
        <header>
          <Link to={{
          pathname: `event/${event.name}`,
          state: { event: event }
          }}>
          <img src={event.urlImage} alt="Evento"/>
          </Link>
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
      </div>
    ) )}
</Container>
)

export default events
