import React, { useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import styled from "styled-components";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <StyledDiv>
    <Card>
      <form onSubmit={submitHandler}>
        <DivControl
          className={`
           ${emailIsValid === false ? classes.invalid : ""}`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />

          {` ${passwordIsValid === false ? classes.invalid : ""}`}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </DivControl>
        <DivActions>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </DivActions>
      </form>
    </Card>
    </StyledDiv>
  );
};

const StyledDiv= styled.div`
  width: 60%;
  max-width: 50rem;
  margin: 2rem auto;
  padding: 1rem 2rem;
`;

const DivControl = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  .control label,
  .control input {
    display: block;
  }

  & label {
    font-weight: bold;
    flex: 1;
    color: #741188;
    margin-bottom: 0.5rem;
  }

  & input {
    flex: 3;
    font: inherit;
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  &.invalid input {
    border-color: red;
    background: #fbdada;
  }


  @media (min-width: 768px) {
  .control {
    align-items: center;
    flex-direction: row;
  }

}
`;

const DivActions = styled.div`
  text-align: center;
`;
export default Login;
