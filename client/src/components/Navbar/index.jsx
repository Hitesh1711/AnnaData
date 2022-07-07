import { Button } from "../../components/Button";
import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { Marginer } from "../Margin";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";

const NavConatiner = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const AcessisbilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled.a`
  font-size: 17px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  height: 35%;
  width: 1px;
  background-color: #fff;
`;

export function Navbar(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile);
  console.log(props);
  const { pathname } = useLocation();
  const token = sessionStorage.getItem("token");
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    let currentUser = JSON.parse(window.atob(base64));
    return {
      duration: currentUser.duration,
      email: currentUser.email,
      exp: currentUser.exp,
      iat: currentUser.iat,
      _id: currentUser.userId,
    };
  }
  const currentUser = parseJwt(token);
  console.log(currentUser);

  const history = useHistory();
  const logout = () => {
    // props.setUserLogin({});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    history.push("/signin");
  };

  let color = "";
  let position = "";
  if (pathname !== "/") {
    color = "rgba(75, 163, 159, 0.85)";
    position = "fixed";
  } else {
    color = "";
    position = "";
  }
  return (
    <div>
      <NavConatiner style={{ backgroundColor: color, position: position }}>
        <Link to={{ pathname: "/" }} style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        {isMobile ? (
          <Dropdown>
            <Dropdown.Toggle variant="light">Menu</Dropdown.Toggle>
            <div style={{ zIndex: 200 }}>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Home Page</Dropdown.Item>
                <Dropdown.Item href="/cropcart">Crop Cart</Dropdown.Item>
                <Dropdown.Item href="/news">News</Dropdown.Item>
                <Dropdown.Item href="/weather">Weather</Dropdown.Item>
                <Dropdown.Item
                  href="https://www.covid19india.org/"
                  target="_blank"
                >
                  Covid Updates
                </Dropdown.Item>
                <Dropdown.Item href="/helpline">Helpline Numbers</Dropdown.Item>
                {currentUser?._id ? (
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                ) : (
                  <Dropdown.Item href="/signin">Sign In</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </div>
          </Dropdown>
        ) : (
          <AcessisbilityContainer>
            <Link
              to={{ pathname: "/cropcart" }}
              style={{ textDecoration: "none" }}
            >
              <AnchorLink>Crop Cart </AnchorLink>
            </Link>
            <Marginer direction="horizontal" margin={15} />
            <Link to={{ pathname: "/news" }} style={{ textDecoration: "none" }}>
              <AnchorLink>News </AnchorLink>
            </Link>
            <Marginer direction="horizontal" margin={15} />
            <Link
              to={{ pathname: "/weather" }}
              style={{ textDecoration: "none" }}
            >
              <AnchorLink>Weather </AnchorLink>
            </Link>
            <Marginer direction="horizontal" margin={15} />
            <Link
              to={{ pathname: "https://www.covid19india.org/" }}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
            <AnchorLink>Covid Update</AnchorLink> 
            </Link>
            <Marginer direction="horizontal" margin={15} />
            <Link
              to={{ pathname: "/helpline" }}
              style={{ textDecoration: "none" }}
            >
              <AnchorLink>Helpline </AnchorLink>
            </Link>
            <Marginer direction="horizontal" margin={10} />
            <Seperator />
            <Marginer direction="horizontal" margin={10} />
            {currentUser?._id ? (
              <AnchorLink onClick={logout}>Logout</AnchorLink>
            ) : (
              <Link
                to={{ pathname: "/signin" }}
                style={{ textDecoration: "none" }}
              >
                <Button size={13}>Login/Signup</Button>
              </Link>
            )}
          </AcessisbilityContainer>
        )}
      </NavConatiner>
    </div>
  );
}
