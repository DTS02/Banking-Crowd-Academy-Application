import React from "react";
import "./Card-Style.css";

const Cards = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-tittle">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          pariatur sed nihil odio officiis quibusdam omnis, adipisci ad
          repellendus at.
        </p>
        <a href="#" className="btn btn-outline-success">
          Lihat Kelas
        </a>
      </div>
    </div>
  );
};

export default Cards;
