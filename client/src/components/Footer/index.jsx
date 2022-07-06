import React from "react";
import "./style.css";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import Icon from "../Icons/icon";

const Heading = styled.h5`
  color: #595959;
  align-content: center;
  text-align: center;
`;
const Bottom = styled.div`
  color: #595959;
  text-align: center;
  background-color: #e5e5e5;
`;
const IconsContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 2%;
  width: 40vw;
`;

const Footer = () => {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, rgb(210, 43, 43) 0%, rgb(194, 43, 43) 40%, rgb(235, 72, 72) 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <Heading>WE ARE HAPPY TO HELP !! </Heading>
        <Heading>Reachout to us at :</Heading>
        <IconsContainer>
          <Icon color={FacebookBackground} size="2.2rem">
            <FaFacebookF />
          </Icon>
          <Icon color={InstagramBackground} size="2.2rem">
            <FaGoogle />
          </Icon>
          <Icon color={TwitterBackground} size="2.2rem">
            <FaTwitter />
          </Icon>
        </IconsContainer>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <Bottom>Crafted with ♥ @AnnaData</Bottom>
    </footer>
  );
};

export default Footer;
