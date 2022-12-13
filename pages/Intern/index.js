import React, { Fragment } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MetaHead from '../../components/MetaHead';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import Intern from '../../components/Intern';

const InternPage = () => {
  return (
    <div>
        <Fragment>
            <MetaHead />
            <Header/>
            <PageTitle pageTitle={'Become an Intern'} pagesub={'Become an Intern'}/> 
            <Intern/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    </div>
  )
}

export default InternPage;