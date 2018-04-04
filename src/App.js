import React, { Component } from 'react';
import { Header, Image, Card } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App ui container">
        <Header as="h1">
          <Image circular src="https://image.ibb.co/fTtTSm/jrrYC9x.jpg" />
          {' '}Ibby
        </Header>

        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Programmer</Card.Header>
              <Card.Description>I am a self-taught programmer, mainly developing react web apps.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Foodhall Volunteer</Card.Header>
              <Card.Description>I volunteer at foodhall on a regular basis and am involved with the cafe, the tech branch, as well as a few other activities.</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default App;
