import React, {Fragment} from 'react';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import Volunteer from '../../components/Volunteer';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import MetaHead from '../../components/MetaHead';

const VolunteerPage =() => {
    return(
        <Fragment>
            <MetaHead />
            <Header/>
            <PageTitle pageTitle={'Become a Volunteer'} pagesub={'Become a Volunteer'}/> 
            <Volunteer/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default VolunteerPage;
