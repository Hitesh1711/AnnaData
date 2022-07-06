import React from "react";
import styled from "styled-components";

const CropContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 280px;
  min-height: 100px;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  border-radius: 15px;
  margin: 0.5em;
  margin-bottom: 1.3em;
  :hover {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.5);
    background-color: rgba(75, 163, 159, 0.1);
  }
`;
const TopContainer = styled.div`
  width: 100%;
  background-color: rgba(75, 163, 159, 0.85);
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
`;

const BottomContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 5px;
  padding-bottom: 5px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  color: #000;
  text-align: center;
  padding: 10px;
`;

const SpecialistName = styled.h4`
  margin: 0;
  color: rgb(104, 102, 102, 1);
  font-size: 12px;
  font-weight: 550;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.div`
  margin-left: 3px;
  color: #1a7073;
  font-weight: 700;
`;
const Priceval = styled.div`
  margin-left: 2px;
  color: black;
  font-weight: 600;
`;

const StartingAtText = styled.h6`
  margin: 0;
  color: rgb(104, 102, 102);
  font-weight: 500;
`;

const CropItems = ({
  date,
  state,
  district,
  market,
  commodity,
  min_price,
  max_price,
  modal_price,
}) => {
  return (
    <CropContainer>
      <TopContainer>
        <Title>{commodity}</Title>
      </TopContainer>

      <ContentContainer>
        <PriceContainer>
          <PriceText>Max-Price:</PriceText> <Priceval>Rs.{max_price}</Priceval>
        </PriceContainer>
        <PriceContainer>
          <PriceText>Min-Price:</PriceText> <Priceval>Rs.{min_price}</Priceval>
        </PriceContainer>
        <PriceContainer>
          <PriceText>Modal-Price: </PriceText>{" "}
          <Priceval>Rs.{modal_price}</Priceval>
        </PriceContainer>
      </ContentContainer>
      <BottomContainer>
        <Priceval>{date}</Priceval>
        <StartingAtText>
          <SpecialistName>{state}</SpecialistName>
          {district + "  "}
          {market}
        </StartingAtText>
      </BottomContainer>
    </CropContainer>
  );
};
export default CropItems;
