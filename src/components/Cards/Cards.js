import React from 'react';
import "./Cards.css";

const Cards = ({results}) => {
  let display;
  console.log(results);

  if (results){
    display = results.map((x) => {
      let {id,name,image,status,species,gender,origin,location} = x;
      return (
      <div key={id} className="col-3">
        <div className="cards">
          <img src={image} alt="" className="img-fluid"/>
          <div className="content">
            <div className="fs-3 font-monospace">{name}</div>
            <div className="fs-6">Status : {status}</div>
            <div className="fs-6">Species : {species}</div>
            <div className="fs-6 mb-2">Gender : {gender}</div>
            <div className="fs-5 fw-light">Origin :</div>
            <div className="fs-6 fw-lighter mb-2">{origin.name}</div>
            <div className="fs-5 fw-light">Location :</div>
            <div className="fs-6 fw-lighter">{location.name}</div>
          </div>
        </div>
      </div>
      );
    });

  }else{
    display = "Error";
  }

  return (
    <>{display}</>
  );
};

export default Cards;
