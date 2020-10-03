import React from "react";
import styled from "styled-components";

const FormInput = styled.div`
  width: 100%;
`;

const Input = styled.input.attrs(props => ({
  placeholder: props.placeholder,
  type: props.type,
  name: props.name
}))`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  border-radius: 5px;
  margin-bottom: ${props => (props.errorMsg != null ? "10px" : "20px")};
  outline: none;
  padding: 5px 10px;
  box-sizing: border-box;
  letter-spacing: 1px;
  background: ${props =>
    props.errorMsg != null ? "rgba(255, 0, 0, 0.05)" : "none"};
  border: ${props =>
    props.errorMsg != null
      ? "1px solid rgba(255, 0, 0, 0.7)"
      : "1px solid rgba(0, 0, 0, 0.2)"};
  font-family: "Montserrat", sans-serif;

  :focus {
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

const ErrorMsg = styled.p`
  letter-spacing: 0;
  font-weight: 500;
  font-size: 0.9rem;
  color: rgba(255, 0, 0, 0.7);
  margin: 0;
  margin-bottom: ${props => props.errorMsg != null && "10px"};
`;

const formInput = props => {
  return (
    <FormInput>
      <Input {...props} />
      {props.errorMsg != null && (
        <ErrorMsg errorMsg={props.errorMsg}>{props.errorMsg}</ErrorMsg>
      )}
    </FormInput>
  );
};

export default formInput;
