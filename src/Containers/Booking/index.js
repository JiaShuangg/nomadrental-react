import React,{ Component } from 'react'

class Bookings extends Component{
  render = () =>{
    return(
      <div>
        <h1>Bookings</h1><br/><br/>
        <h3>Your current upcoming stays</h3>
        <p>Please update with the property if your travel plans should change or if you wish  to make any changes to your stay.</p>
        <a href="/" style= {{textDecoration:"none"}}> &#8250; Learn more about our premium subsciption</a><br/><br/><br/><br/>
        
        <div className="card mb-3" style={{maxWidth: "830px"}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="room.jpeg" className="card-img" alt="room"/>
            </div>
            
            <div className="col-md-7">
              <div className="card-body"><br/>
                <h5 className="card-title">The Green View</h5>
                <span id="tabs">
                  <i className="fa fa-circle-check"></i>
                </span>
                
                <span className="item"> Booking request received</span><br/>
                <span style={{color:"rgb(154, 91, 226)"}}>
                  <i className="fa fa-clock"></i>
                </span>
                <span style={{color:"rgb(154, 91, 226)"}}> Awaiting confirmation from Hotel</span>
                <div><hr/></div>
                
                <h5 className="card-title">Superior Premium</h5>
                <div className="row">
                  <div className="col">
                    <p className="card-text">
                      <small className="text-muted">
                        <span id="tabs" >
                          <i className="fa fa-calendar-check"></i>
                        </span>
                        <span className="item"> Check-in : </span>
                      </small>
                    </p>
                    <h6>
                      <b>July 9th,2018</b>
                    </h6>
                  </div>
                  
                  <div className="col">
                    <p className="card-text">
                      <small className="text-muted">
                        <span id="tabs">
                          <i className="fa fa-file-o"></i>
                        </span>
                      <span className="item"> Reference </span>
                      </small>
                      </p>
                      <h6>
                        <b>#UC311K</b>
                      </h6>
                  </div>
                </div>
              </div>
              
              <div className="review">
                <a href="/">
                  <span style={{color:"rgb(125, 238, 110)"}}>
                    <i className="fa fa-star"></i>
                  </span>
                  <span style={{color:"rgb(125, 238, 110)"}}> Rate your stay</span><br/><br/>
                </a>
                
                <a href="/">
                  <span style={{color:"rgb(168, 162, 162)"}}>
                    <i className="fa fa-paper-plane"></i>
                  </span>
                  <span style={{color:"rgb(168, 162, 162)"}}> Email the property</span><br/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Bookings