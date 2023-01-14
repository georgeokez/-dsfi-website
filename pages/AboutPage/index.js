import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import VedioCta from "../../components/vediocta";
import Mission from "../../components/mission";
import About from "../../components/about";
import AboutAddOns from "../../components/about/addons/AboutAddOns";
import CaseSlide from "../../components/case";
import CounterSection from "../../components/counter";
import TeamSection from "../../components/team";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import MetaHead from "../../components/MetaHead";
import AboutContent from "../../components/about/AboutContent";

const AboutPage = () => {
  return (
    <Fragment>
      <MetaHead />
      <Header />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <AboutContent />
      <VedioCta />
      <Mission subclass={"section-padding"} />
      <About />
      <AboutAddOns />
      {/* <CounterSection/> */}
      <CaseSlide />
      <TeamSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
