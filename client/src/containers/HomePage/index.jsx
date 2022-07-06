import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { Navbar } from "../../components/Navbar/index";
import Footer from "../../components/Footer";
import Prices from "./dailyPrices";
export function HomePage(props) {
  return (
    <div>
      <PageContainer>
        <TopSection>
          <Navbar setUserLogin={props.setUserLogin} />
        </TopSection>
      </PageContainer>
      <br />
      <Prices />
      <br />
      <br />
      <Footer />
    </div>
  );
}
