import React from 'react'
import Bookings from './Booking'
import Menu from './Menu'
import Table from './Table'
import { Route, Switch,Redirect} from 'react-router-dom'

const MainRouter = () => {
  return(
    <div className="container">

      <img src="logo.png" className="img-fluid" alt="NomadRental" style= {{maxWidth:"180px",opacity:0.3,margin:"30px"}}/>
      <a href="/" style= {{float:"right",textDecoration:"none",margin:"30px"}}>Choose a city <i className="fa-solid fa-bars"></i></a><br/><br/><br/>
    
      <div className="row">
        <Menu/>
        <div  className="col-md-9">
          <Switch>
            <Route path="/Bookings" component={Bookings}/>
            <Route path="/Table" component={Table}/>
            <Redirect from={ '/' } to={ '/Bookings' } />
          </Switch>
        </div>
      </div>
    </div>
    
  )
}

export default MainRouter