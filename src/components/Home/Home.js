import React from "react";
import Header from "../Header/Header";
import "./home.scss";
import Slider from "../SliderSection/Slider";
import PlanComparision from "../PlanComparision/PlanComparision";
import VideoSection from "../VideoSection/VideoSection";
import Stats from "../Stats/Stats";
import Footer from "../FooterSection/Footer";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Grammarly Premium: Elevate Your Writing | Grammarly</title>
      </Helmet>
      <Header />
      <main>
        <Slider />
        <PlanComparision />
      </main>
      <VideoSection />
      <Stats />
      <Footer />
    </>
  );
}
