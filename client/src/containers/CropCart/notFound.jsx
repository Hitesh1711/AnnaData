import React from "react";
import empty from "../../assets/empty.png";
import { Button } from "../../components/commonStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFound = styled.div`
  text-align: center;
  margin-top: 15%;
  padding: 5%;
`;
const TextContainer = styled.h2`
  text-align: center;
`;
const SubText = styled.div`
  color: grey;
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const DataNotFound = () => {
  return (
    <NotFound>
      <img src={empty} alt="not found" height={100} width={300} />
      <TextContainer>We didn't find a Match</TextContainer>
      <SubText>
        Click on Add Products Button to add products or login in to continue
      </SubText>
      <Link to={{ pathname: "/signin" }} style={{ textDecoration: "none" }}>
        <Button>Login</Button>
      </Link>
    </NotFound>
  );
};

export default DataNotFound;
