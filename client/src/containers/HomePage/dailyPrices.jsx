import React, { useState, useEffect } from "react";
import axios from "axios";
import CropItems from "./cropItems";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Button } from "../../components/Button";

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 400;
  padding-left: 20px;
`;
const ButtonWrapper = styled.div`
  margin: auto;
  width: 10%;
`;
function Prices() {
  const [crops, setCrops] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000014b069bec6c7242f25ac7e249f759b6e3%20&format=json&offset=4581&limit=35&filters=district%20%3D%3D%20%22Jodhpur%22"
        //"https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=20"
      )
      .then((res) => {
        setCrops(res.data.records);
        console.log(res.data.records);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="priceList">
      <div className="itemSearch">
        <Heading>Current Price of Various Commodities</Heading>
      </div>
      <Grid container justify="center" spacing={0}>
        {crops.map((crop) => {
          return (
            <Grid item key={crop.id}>
              <CropItems
                // key={crop.commodity}
                date={crop.arrival_date}
                state={crop.state}
                district={crop.district}
                market={crop.market}
                commodity={crop.commodity}
                min_price={crop.min_price}
                max_price={crop.max_price}
                modal_price={crop.modal_price}
              />
            </Grid>
          );
        })}{" "}
      </Grid>
      {/*
      <ButtonWrapper>
        <Button>Load More</Button>
      </ButtonWrapper>
      */}
    </div>
  );
}
export default Prices;
