import * as React from 'react';
import Container from 'reactstrap/lib/Container';

import PersonalDetails from './PersonalDetails';

import './App.css';

export default class App extends React.Component {
  public render() {
    return (
        <Container>
          <PersonalDetails />
        </Container>
    );
  }
}
