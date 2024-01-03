import React from "react";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function CountryCards({ cards, searchValue }) {
  return (
    <div className="containerStyle">
      {cards.filter((ele, index) => {
        return searchValue.toLowerCase() === "" ||
          searchValue.toUpperCase() === ""
          ? ele
          : ele.name.common.toLowerCase().includes(searchValue) ||
              ele.name.common.toUpperCase().includes(searchValue);
      })
      .map((ele,index)=>(
        <div className="cardStyle" key={index}>
          <img className="flag" src={ele.flags.png} alt={ele.name.common} />
          <p className="mt-2" >{ele.name.common}</p>
        </div>
      ))
      }
    </div>
  );
}

export default CountryCards;
