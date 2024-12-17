import React from "react";

import { Cards, Footer, Header, Main } from "@components/css";
import HeroSection from "@components/heroSection";
import Layout from "@components/layout";
import EcosystemBox from "@components/ecosystem";
import SurveyBox from "@components/insights";
import CommunitySection from "@components/community";
import { Box } from "@mui/material";
import BottomSection from "@components/bottomSection";

const Home: React.FC = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        minHeight: "100vh",
      }}
    >
      <Header />    
      <HeroSection />
      <EcosystemBox />
      {/* <SurveyBox />
      <CommunitySection /> */}
      <BottomSection />
    </Box>
  );
};

export default Home;
