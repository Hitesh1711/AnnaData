import React from "react";
import styled from "styled-components";

const ButtonWraper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: 8px 1.5em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  background: ${({ apperance }) =>
    apperance === "regular"
      ? "#239599"
      : "linear-gradient(45deg, #1f7477 30%, #239599 90%)"};
  cursor: pointer;
  box-shadow: ${({ apperance }) =>
    apperance === "regular"
      ? "0 1px 4px 0 rgba(0, 0, 0, 0.16)"
      : "0 2px 8px 0 rgba(0, 0, 0, 0.3)"};
  transition: all 200ms ease-in-out;

  &:hover {
    background: ${({ apperance }) =>
      apperance === "regular"
        ? "#1f7477"
        : "linear-gradient(45deg, #239599 30%, #1f7477 90%)"};
    box-shadow: ${({ apperance }) =>
      apperance === "regular"
        ? "0 2px 8px 0 rgba(0, 0, 0, 0.16)"
        : "0 4px 16px 0 rgba(0, 0, 0, 0.3)"};
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { size, apperance } = props;
  return (
    <ButtonWraper size={size} apperance={apperance}>
      {props.children}
    </ButtonWraper>
  );
}
