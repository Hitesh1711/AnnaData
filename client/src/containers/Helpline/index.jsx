import React, { useState } from "react";
import Numbers from "./data";
import styled from "styled-components";
import ListItem from "./ListItem";

const SearchBar = styled.input`
  width: auto;
  min-width: 40%;
  height: auto;
  border: 1px solid rgba(75, 163, 159, 0.85);
  border-radius: 17px;
  :focus {
    outline: none;
  }
  font-size: 16px;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
`;
const SearchWrapper = styled.div`
  margin-left: 40%;
`;
const Margin = styled.div`
  margin-top: 80px;
`;
const Container = styled.div`
  margin: 3%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 2%;
`;

const Helpline = () => {
  const searchTerm = (e) => {
    setTerm(e.target.value);
  };
  const [term, setTerm] = useState("");
  return (
    <div>
      <div>.</div>
      <Margin />
      <SearchWrapper>
        <SearchBar
          onChange={searchTerm}
          autoComplete="off"
          placeholder="search"
        />
      </SearchWrapper>
      <Container>
        {Numbers.filter((val) => {
          if (term === "") return val;
          else {
            return val.name.toLowerCase().includes(term.toLowerCase());
          }
        }).map((product) => (
          <ListItem product={product} />
        ))}
      </Container>
    </div>
  );
};

export default Helpline;
