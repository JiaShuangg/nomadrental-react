import React,{ Component } from 'react'
import Bookings from './Booking'
import Menu from './Menu'
import Table from './Table'

class Layout extends Component{

  render = () =>{
    return(
      <div className="container">
        <img src="logo.png" className="img-fluid" alt="NomadRental" style= {{maxWidth:"180px",opacity:0.3,margin:"30px"}}/>
        <a href="/" style= {{float:"right",textDecoration:"none",margin:"30px"}}>Choose a city <i className="fa-solid fa-bars"></i></a><br/><br/><br/>
        <div className="row">
          <Menu/>
          <Bookings/>
        </div>
        <Table/>
      </div>
    )
  }
}
export default Layout

