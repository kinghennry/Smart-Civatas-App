import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Video from "../../components/Video/Video";
import Hero from "../../container/Hero/Hero";
import TermContainer from "../../container/TermsContainer/TermContainer";
import Apartment from "../../container/Apartment/Apartment";
import Services from "../../components/Services/Services";
import FaQ from "../../container/FaQ/FaQ";
import Tabs from "../../components/Tabs/Tabs";

export default function Home() {
  return (
    <React.Fragment>
      {/* dont forget to add react helmet dependency when we complete the projects*/}
      <Header />
      <Hero />
      <Apartment />
      <Services />
      <Tabs />
      <Video />
      <FaQ />
      <Footer />
      <TermContainer />
    </React.Fragment>
  );
}
