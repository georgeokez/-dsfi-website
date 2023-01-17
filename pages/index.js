import React, { Fragment } from "react";
import MetaHead from "../components/MetaHead";
import Header from "../components/header";
import Hero2 from "../components/hero2";
import Mission from "../components/mission";
import About from "../components/about";
import CaseSlide from "../components/case";
import TeamSection from "../components/team";
import WorldSection from "../components/world";
import Footer from "../components/footer";
import Scrollbar from "../components/scrollbar";

const HomePage = () => {
  return (
    <Fragment>
      <MetaHead />
      <Header />
      <Hero2 />
      <Mission subclass={"section-padding"} />
      <About />
      <CaseSlide />
      <TeamSection />
      <WorldSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
