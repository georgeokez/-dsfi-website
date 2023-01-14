import React, { Fragment } from "react";
import MetaHead from "../components/MetaHead";
import Header from "../components/header";
import Hero2 from "../components/hero2";
import Mission from "../components/mission";
import About from "../components/about";
import CaseSlide from "../components/case";
import CounterSection from "../components/counter";
import TeamSection from "../components/team";
import WorldSection from "../components/world";
import BlogSection from "../components/BlogSection";
import Footer from "../components/footer";
import Scrollbar from "../components/scrollbar";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
  return (
    <Fragment>
      <MetaHead />
      {/* <ToastContainer/>*/}
      <Header />
      <Hero2 />
      <Mission subclass={"section-padding"} />
      <About />
      <CaseSlide />
      {/* <CounterSection/> */}
      <TeamSection />
      <WorldSection />
      {/* <BlogSection/> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
