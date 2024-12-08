import React from "react";

import { Cards, Footer, Header, Main } from "@components/css";
import HeroSection from "@components/heroSection";
import Layout from "@components/layout";
import EcosystemBox from "@components/ecosystem";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Layout >
        <HeroSection />
        <EcosystemBox />
      </Layout>
    </div>
  );
};

export default Home;
