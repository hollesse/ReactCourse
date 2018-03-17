import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: this.props.timerStarted,
      timerFinished: 0,
      alertFired: 1,
      durationInSeconds: this.props.durationInSeconds,
      targetDuration: this.props.durationInSeconds,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getActualDuration();
  }

  componentDidMount() {
    setInterval(() => this.getActualDuration(), 1000);
  }

  leadingZero(number) {
    return number < 10 ? '0' + number : number;
  }

  checkStates(){
    if(this.props.durationInSeconds !== this.state.targetDuration){
      this.setState({targetDuration: this.props.durationInSeconds, durationInSeconds: this.props.durationInSeconds, timerFinished: 0});
    }
    if(this.props.timerStarted !== this.state.timerStarted){
      this.setState({timerStarted: this.props.timerStarted});
    }
  }

  fireAlert(timerFinished, alertFired){
    if(timerFinished === 1 && alertFired === 0 ){
      alert("Timer finished!");
      this.setState({alertFired: 1});
    }
  }

  getActualDuration(){
    this.checkStates();
    this.fireAlert(this.state.timerFinished, this.state.alertFired);
    const duration = this.state.durationInSeconds * 1000;
    const seconds = Math.floor((duration/1000) % 60);
    const minutes = Math.floor((duration/1000/60) % 60);
    const hours   = Math.floor(duration/(1000*60*60) % 24);
    let durationInSeconds = this.state.durationInSeconds;
    if(durationInSeconds === 0 && this.state.timerStarted === 1 && this.state.timerFinished === 0){
      this.setState({timerFinished: 1, alertFired: 0});
    }
    if(durationInSeconds > 0 && this.state.timerStarted === 1){
      durationInSeconds = durationInSeconds -1;
    }
    console.log('state', this.state);
    this.setState({durationInSeconds, hours, minutes, seconds});
  }



  render() {
    return (
      <div>
        <div className="Timer-hours">{this.leadingZero(this.state.hours)} hours</div>
        <div className="Timer-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
        <div className="Timer-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
      </div>
    )

  }

}

export default Timer;
