import styled from "styled-components";
import React from "react";

export const Input = styled.input`
  margin-bottom: 0.8rem;
  border-radius: 0.2rem;
  background-color: white;
  border: 1px solid #595959;
  width: 100%;
  height: 2rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: normal;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  align-items: left;
  height: 18%;
  width: 100%;
  padding: 0.3rem;
`;
export const InputText = styled.div`
  background-color: white;
  align-self: left;
  margin-bottom: 0.3rem;
`;
export const Form = styled.form`
  background-color: white;
  padding: 1rem;
  background-color: white;
`;
export const Buttons = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding: 0 1.5rem 0 1.5rem;
`;
export const Button = styled.button`
  background-color: #0070dd;
  border: none;
  color: white;
  font-size: 16px;
  padding: 7px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #00509f;
  }
`;
export const RightAlign = styled.div`
  float: right;
  margin: 2rem;
`;

export const Grid = styled.div`
  display: inline-grid;
  padding: 20px;
  grid-template-columns: auto auto auto;
`;

export const Logo = styled.img`
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const GetDate = (date) => {
  var rdate =
    date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  return rdate;
};
export const GetTime = (date) => {
  let d = new Date(date);
  const time = d.toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return time;
};

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Msg = styled.div`
  color: #b22222;
  padding: 1rem;
  background-color: transparent;
`;
export function ErrorMsg(props) {
  const { msg } = props;
  return <Msg>{msg}</Msg>;
}

export const CenterAlign = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: middle;
`;
