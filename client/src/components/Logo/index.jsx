import React from 'react';
import styled from "styled-components";
import LogoImg from "../../assets/cr_logo.png";
import { Link, Router } from "react-router-dom";

const LogoContainer = styled.div`
display: flex;
align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 800;
  margin-left: 6px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
export function Logo(props) 
{
    const { logosize, textsize } = props;
  
    return (
      <LogoContainer>
       
            <LogoImage size={logosize}>
              <img src={LogoImg} alt="AnnaData logo" />
            </LogoImage>
        
          <LogoTitle size={textsize}>
            AnnaData
          </LogoTitle>
        
      </LogoContainer>
    );
  }