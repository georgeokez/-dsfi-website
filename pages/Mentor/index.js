import React, { Fragment } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MetaHead from '../../components/MetaHead';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import Mentor from '../../components/Mentor';

const MentorPage = () => {
  return (
    <div>
        <Fragment>
            <MetaHead />
            <Header/>
            <PageTitle pageTitle={'Become a Mentor'} pagesub={'Become a Mentor'}/> 
            <Mentor/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    </div>
  )
}

export default MentorPage