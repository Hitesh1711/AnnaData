import React from "react";
import styled from "styled-components";
import backgroundimg from "../../assets/background1.jpg";
import { Marginer } from "../../components/Margin/index";
import { Logo } from "../../components/Logo/index";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 700px;
  background: url(${backgroundimg}) no-repeat;
  background-position: 0px -50px;
  background-size: cover;
`;
const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(75, 163, 159, 0.85);
  display: flex;
  flex-direction: column;
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const TopImage = styled.div`
  width: 20em;
  height: 20em;
  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 25px;
`;

export function TopSection(props) {
  const { children } = props;
  const token = sessionStorage.getItem("token");
  console.log("token", token);
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <InnerContainer>
          <LogoContainer>
            <Logo logosize={60} textsize={55} />
            <Marginer direction="vertical" margin={8} />
            <SloganText>Caring Fields, Caring People,</SloganText>
            <SloganText>Caring Lives</SloganText>
            <Marginer direction="vertical" margin={12} />
            {token ? (
              <div />
            ) : (
              <Link
                to={{ pathname: "/signin" }}
                style={{ textDecoration: "none" }}
              >
                <Button>Join Now</Button>
              </Link>
            )}
          </LogoContainer>
          <TopImage>{/* <img src={""} alt="best in the field"/> */}</TopImage>
        </InnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
