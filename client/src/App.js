import React, { Component } from 'react';
import './css/App.css';
import Card from './Card';
import jsonData from './deliveries-sample.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: jsonData.dropoffs,
      day : "Monday",
      selected : "Monday"
    };
  }
  displayContent = (displayDay) => {
    this.setState({day : displayDay});
    this.forceUpdate();
  }

  refreshContent(){

  }

  render() {

    const day = this.state.data.filter(l => {
        return l.day == this.state.day;
    });
    const listItems = day[0].deliveries.map((dropoff) =>{
          return <Card delivery={dropoff} />
        }
    );
    return (
      <div className="App">
      <div class="container">
        <h1  style={{marginBottom: "20px" }}  class="title">
            Delivery Schedule
          </h1>
      </div>
        <div style={{marginBottom: "-34px" }} class="tile is-ancestor has-text-centered">
          <div class="tile is-parent">
            <a class={this.state.day == 'Monday' ? "button is-hovered is-warning" : "button is-hovered"} onClick={() => this.displayContent("Monday")}>Monday</a>
          </div>
          <div class="tile is-parent">
            <a class={this.state.day == 'Tuesday' ? "button is-hovered is-warning" : "button is-hovered"}  onClick={() => this.displayContent("Tuesday")}>Tuesday</a>
          </div>
          <div class="tile is-parent">
            <a class={this.state.day == 'Wednesday' ? "button is-hovered is-warning" : "button is-hovered"}  onClick={() => this.displayContent("Wednesday")}>Wednesday</a>
          </div>
          <div class="tile is-parent">
            <a class={this.state.day == 'Thursday' ? "button is-hovered is-warning" : "button is-hovered"}  onClick={() => this.displayContent("Thursday")}>Thursday</a>
          </div>
          <div class="tile is-parent">
            <a class={this.state.day == 'Friday' ? "button is-hovered is-warning" : "button is-hovered"}  onClick={() => this.displayContent("Friday")}>Friday</a>
          </div>
        </div><br/>
        {listItems}
      </div>
    );
  }
}

export default App;
