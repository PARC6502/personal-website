import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Header, Image, Card, Grid } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App ui container">
        <Grid>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={4}>
              <Image size='small' circular src="https://image.ibb.co/fTtTSm/jrrYC9x.jpg" />
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as="h1" textAlign='center'>{' '}Ibby</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Card.Group itemsPerRow="three">
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
          <Card>
            <Card.Content>
              <Card.Header>Aspiring Artist</Card.Header>
              <Card.Description>I recently decided to teach myself to teach myself to draw. I plan to become amazing at it, watch this space.</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

export default App;
