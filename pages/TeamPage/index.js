import React, { Fragment } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MetaHead from "../../components/MetaHead";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import TeamDetails from "../../components/team/TeamDetails";
import WorldSection from "../../components/world";

const TeamPage = () => {
  return (
    <div>
      <Fragment>
        <MetaHead />
        <Header />
        <PageTitle pageTitle={"Meet the Team"} pagesub={"Our Team"} />
        <TeamDetails />
        <WorldSection />
        <Footer />
        <Scrollbar />
      </Fragment>
    </div>
  );
};

export default TeamPage;
