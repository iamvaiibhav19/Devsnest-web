import React from "react";

const Boxx = (props) => {
  return (
    <div className={`boxx ${props.class}`}>
      <h1 className="heading ">{props.heading}</h1>
      {props.values && (
        <h2 className="padding css-3d-text">
          {props.values.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
        </h2>
      )}
    </div>
  );
};

export default Boxx;
