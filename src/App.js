import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import logo from "./logo.png";
import './index.css';

function App() {
  let [pageNumber,setPageNumber] = useState(1);
  let [fetchedData,updateFetchedData] = useState([]);
  let {info,results} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(()=>{
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  },[api])

  return (
    <div className="App">
      <img
        img src={logo} alt="logo" className="center"
      />

      <div className="container">
        <div className="row">
          <Cards results={results}/>
        </div>
      </div>

      <Pagination 
        info={info}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
