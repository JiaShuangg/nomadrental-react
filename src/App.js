import './Booking.css';
import MainRouter from './Components/router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'

import {HashRouter} from  "react-router-dom";


function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
      <HashRouter>
        <MainRouter/>
      </HashRouter>
    </>
  )
}

export default App
