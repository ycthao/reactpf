import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/index.css";

function Wrapper(props) {
  return (
    <div className="container" style={{ width: "100%" }}>
      <div className="row center">{props.children}</div>
    </div>
  );
}

export default Wrapper;
