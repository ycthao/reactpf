import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/index.css";
import { Card } from "react-bootstrap";

function PortfolioCard(props) {
  return (
    <Card className="col-4 bgc">
      <Card.Title>
        <h3>{props.name}</h3>
      </Card.Title>
      <Card.Img alt={props.name} src={props.image} />
      <Card.Body>
        <Card.Text>
          {props.description} <br />
          <br />
          Technology used: {props.technology} <br />
          <br />
          Github: <a href={props.github}>{props.github}</a>
          <br />
          Deployed: <a href={props.deployed}>{props.deployed}</a>
          {props.deployed === "" ? "No deployment" : ""} <br />
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;
