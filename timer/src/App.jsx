import React, { Component } from 'react';
import Timer from './Timer.jsx'
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      newSeconds: '',
      timerStarted: 0
    }
  }

  changeSeconds() {
    this.setState({seconds: this.state.newSeconds});
  }

  startTimer(){
    this.setState({timerStarted: 1});
  }

  stopTimer(){
    this.setState({timerStarted: 0});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Timer of {this.state.seconds}
        </div>
        <Timer
          durationInSeconds={this.state.seconds}
          timerStarted={this.state.timerStarted}
        />
      <Form inline>
          <FormControl
            className="Seconds-input"
            placeholder='number of seconds'
            onChange={event => this.setState({newSeconds: event.target.value})}
          />
          <Button onClick={() => this.changeSeconds()}>
            Set Time
          </Button>
          <Button onClick={() => this.startTimer()}>
            Start
          </Button>
          <Button onClick={() => this.stopTimer()}>
            Stop
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
