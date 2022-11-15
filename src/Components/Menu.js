import React,{ Component } from 'react';
import Status from './Status';

class Menu extends Component {
  render = () =>{
    return(
      <div className="col">
          <div className="diamond-shape">
            <div className="item-count">JD</div>
          </div>
          <br/>
          <div className="effect">
            <h6><b>John Doe</b></h6>
            <span className="item">Premium Nomad</span>
            <br/><br/><br/>

            <a href="#/Bookings">
              <span id="tabs"><i className="fa fa-envelope"></i></span>
              <span className="item" id="tabs"> Bookings</span>
            </a><br/>

            <a href="#">
              <span id="tabs"><i className="fa fa-bed"></i></span>
              <span className="item" id="tabs"> Refer and Earn</span>
            </a><br/>

            <a href="#/Table">
              <span id="tabs"><i className="fa fa-user-gear"></i></span>
              <span className="item" id="tabs"> Account Settings</span>
            </a><br/><br/><br/>

            <li>SUPPORT</li><br/>

            <a href="#">
              <span id="tabs"><i className="fa fa-circle-info"></i></span>
              <span className="item" id="tabs"> Contact Us</span>
            </a>
            <br/>

            <a href="#">
              <span id="tabs"><i className="fa fa-square-arrow-up-right"></i></span>
              <span className="item" id="tabs"> FAQ</span>
            </a><br/><br/><br/><br/>
            
            <Status/>
          </div>
        </div>
    )
  }
}
export default Menu;