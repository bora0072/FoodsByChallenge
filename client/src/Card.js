import React, { Component } from 'react';
import './bulma.css';


class Card extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){

  }

  render(){
    return(
      <div>
      <br/>
      <center>
      <div className="tile  box is-8">
        <div className="tile is-ancestor">
          <div className="tile is-4">
          <figure className="image">
            <p style={{fontSize : "1.2rem"}}>{this.props.delivery.restaurantName}</p>
            <img src={this.props.delivery.logoUrl} alt="Placeholder image"/>
          </figure>
          </div>
          <div className="tile is-vertical">
            {!this.props.delivery.soldOut &&
              <div style={{ marginTop: "10px"}}>
              <div className="tile is-8w ">
                <p className= "place_1"> Delivery Time</p>
                <a className="button is-primary">{this.props.delivery.dropoff}</a>
              </div>
              <div className="tile is-8w ">
                <p className="place_2"> Order By</p>
                <a className="button is-info">{this.props.delivery.cutoff}</a>
              </div>
              <a className="button is-small is-danger place_a">Select Restaurant</a>
              {this.props.delivery.sellingOut && <p><strong>Hurry! Only 5 meals left</strong></p>}
              </div>
            }
            {this.props.delivery.soldOut &&
              <div>
              <div className="box is-warning">
                <strong>Sold Out!</strong><br/><br/>
                 This restaurant has reached maximum order capacity which is established to ensure capacity.
              </div>
              </div>
            }
          </div>
        </div>
        </div>
        </center>
      </div>
    );
  }
}
export default Card;
