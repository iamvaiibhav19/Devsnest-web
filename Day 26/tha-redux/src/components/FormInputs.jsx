import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNameInput, updateEmailInput } from "../redux/Form/formActions";
import "../App.css";

const FormInputs = () => {
  const userName = useSelector((state) => state.userName);
  const userEmail = useSelector((state) => state.userEmail);

  const dispatch = useDispatch();

  return (
    <div className="form-inputs">
      <form action="" className="inputs">
        <h2>Input</h2>
        <div>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => dispatch(updateNameInput(e.target.value))}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => dispatch(updateEmailInput(e.target.value))}
          />
        </div>
      </form>
      <div className="data">
        <h2>Data</h2>
        <p>
          <h9>userName : </h9>

          {userName}
        </p>
        <p>
          <h9>Email : </h9>

          {userEmail}
        </p>
      </div>
    </div>
  );
};

export default FormInputs;
