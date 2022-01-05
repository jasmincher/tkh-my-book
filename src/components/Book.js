import React from "react";
import "../App.css";

function Book(props) {
  return (
    <div className="book-container">
      <h1 className="book-title">{props.title}</h1>

      <div className="book-info">
        <img src={props.img} className="book-img" />
        <p className="book-desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default Book;
