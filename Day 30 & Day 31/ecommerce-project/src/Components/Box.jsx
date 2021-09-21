import React from "react";

function Box(props) {
  return (
    <div className={`box ${props.class}`}>
      <h2 className="heading ">{props.heading}</h2>
      {props.values && (
        <h2 className="padding css-3d-text">
          {props.values.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
        </h2>
      )}
    </div>
  );
}

export default Box;
