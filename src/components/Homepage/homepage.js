import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/index.css";

function Homepage() {
  return (
    <div className="container">
      <Card className="bgc" style={{ width: "100%" }}>
        <Card.Title className="center">Yeem Chij Thao</Card.Title>
        <Card.Img variant="top" style={{ width: "40%", height: "40%" }} src="./image/Profilepicture.PNG" />
        <Card.Body>
          <Card.Text>
            <p>
              I'm Yeem Chij Thao, also known as Steve, and currently taking a coding boot camp in hope to learn new
              skills.
            </p>
            <p>
              I have no professional experience in coding. I have some coding knowledge through the boot camp learning
              HTML, CSS, JavaScript, Nodejs, MySQL, Mongo, Reactjs.
            </p>
            <p>
              As I further educate myself either through the boot camp or on my own time, I'd add additional content of
              what I know and learn in my portofolio.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Homepage;
