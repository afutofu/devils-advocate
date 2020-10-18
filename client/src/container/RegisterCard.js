import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { isEmpty } from "../shared/validateInput";
import { FormInput } from "../components";
import { attemptRegister } from "../store/actions";

const formStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const RegisterCardComp = styled.div`
  position: relative;
  width: 50%;
  min-width: 300px;
  max-width: 400px;
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 0;
  background: #fefefe;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  a {
    width: 100%;
  }
`;

const Header = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Hr = styled.hr`
  align-self: center;
  border: none;
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const ErrorBox = styled.button`
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  border-radius: 5px;
  margin: 0;
  margin-bottom: 20px;
  outline: none;
  padding: 10px 10px;
  line-height: 1.2rem;
  letter-spacing: 1px;
  background: rgba(255, 0, 0, 0.15);
  border: 1px solid rgba(255, 0, 0, 0.6);
  font-family: "Montserrat", sans-serif;
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  text-transform: uppercase;
  background: ${(props) => (props.inverse ? "white" : "#f50000")};
  font-weight: 600;
  font-size: 0.9rem;
  padding: 7px 15px;
  border: 3px solid #f50000;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  color: ${(props) => (props.inverse ? "#f50000" : "white")};
  letter-spacing: 2px;
  align-self: center;
  margin-bottom: 20px;

  transition: 0.3s;
  :hover {
    background: ${(props) => (props.inverse ? "white" : "#c90000")};
    border: ${(props) =>
      props.inverse ? "3px solid #f50000" : "3px solid #c90000"};
  }
`;

const RegisterCard = (props) => {
  const { isAuthenticated } = props;
  const [usernameVal, setUsernameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [password2Val, setPassword2Val] = useState("");

  const [usernameErrorMsg, setUsernameErrorMsg] = useState(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
  const [password2ErrorMsg, setPassword2ErrorMsg] = useState(null);

  const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  let isValidated = true;

  const clearInputs = () => {
    setUsernameVal("");
    setEmailVal("");
    setPasswordVal("");
    setPassword2Val("");
  };

  const validateInput = (input, setInputErrorMsg, type) => {
    if (isEmpty(input)) {
      isValidated = false;
      setInputErrorMsg("This field is required");
    } else if (type === "email") {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(String(input).toLowerCase()) === false) {
        isValidated = false;
        setInputErrorMsg("Invalid email format");
      } else {
        setInputErrorMsg(null);
      }
    } else if (type === "password" && input !== password2Val) {
      isValidated = false;
      setInputErrorMsg("Password does not match");
    } else if (type === "password" && input.length <= 6) {
      isValidated = false;
      setInputErrorMsg("Password needs to be longer than 6 characters");
    } else if (type === "retypePassword" && input !== passwordVal) {
      isValidated = false;
      setInputErrorMsg("Password does not match");
    } else if (type === "retypePassword" && input.length <= 6) {
      isValidated = false;
      setInputErrorMsg("Password needs to be longer than 6 characters");
    } else {
      setInputErrorMsg(null);
    }
  };

  const onAttemptRegister = (e) => {
    e.preventDefault();
    // Validate Input
    isValidated = true;
    validateInput(usernameVal, setUsernameErrorMsg);
    validateInput(emailVal, setEmailErrorMsg, "email");
    validateInput(passwordVal, setPasswordErrorMsg, "password");
    validateInput(password2Val, setPassword2ErrorMsg, "retypePassword");

    setError(null);

    if (isValidated) {
      // API request for users in DB
      setError(false);
      props
        .attemptRegister(usernameVal, emailVal, passwordVal)
        .then(() => {
          clearInputs();
          setRedirect(true);
        })
        .catch(() => {
          clearInputs();
          setError(true);
        });
    }
  };

  const onUsernameChange = (event) => {
    setUsernameVal(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmailVal(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPasswordVal(event.target.value);
  };

  const onPassword2Change = (event) => {
    setPassword2Val(event.target.value);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/fruits" />;
    }
  };

  return (
    <form onSubmit={(e) => onAttemptRegister(e)} style={formStyle}>
      {renderRedirect()}
      <RegisterCardComp>
        <Header>Register</Header>
        <Hr />
        {error && (
          <ErrorBox>
            Failed to register. Either email is already used or server
            unavailable
          </ErrorBox>
        )}
        <FormInput
          name="username"
          placeholder="Username"
          onChange={(e) => onUsernameChange(e)}
          value={usernameVal}
          errorMsg={usernameErrorMsg}
        />
        <FormInput
          name="Email"
          placeholder="Email"
          onChange={(e) => onEmailChange(e)}
          value={emailVal}
          errorMsg={emailErrorMsg}
        />
        <FormInput
          name="retypePassword"
          type="password"
          placeholder="Password"
          onChange={(e) => onPasswordChange(e)}
          value={passwordVal}
          errorMsg={passwordErrorMsg}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Retype Password"
          onChange={(e) => onPassword2Change(e)}
          value={password2Val}
          errorMsg={password2ErrorMsg}
        />
        <Button>Register</Button>
      </RegisterCardComp>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptRegister: (username, email, password) =>
      dispatch(attemptRegister(username, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCard);
