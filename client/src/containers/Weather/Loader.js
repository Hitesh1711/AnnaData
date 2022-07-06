import React from "react";
import styled from "styled-components";
import gif from "../../assets/animation.gif";

const Loader = () => {
  const Body = styled.div`
    width: 100%;
    background-color: rgb(93, 93, 93);
    min-height: 100vh;
    color: #fff;
    text-align: center;
  `;
  const Intro = styled.h1`
    position: relative;
    margin-bottom: auto;
  `;
  const Gif = styled.div`
    background: url(${gif}) no-repeat center center;
    width: 1500px;
    height: 680px;
    animation-duration: 3s;
    margin-bottom: 0px;
  `;
  return (
    <Body>
      <Gif />
      <Intro>AnnaData</Intro>
    </Body>
  );
};

export default Loader;
