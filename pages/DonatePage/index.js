import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Donate from '../../components/Donate'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import MetaHead from '../../components/MetaHead';

const DonatePage =() => {
    return(
        <Fragment>
            <MetaHead />
            <Header/>
            <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <Donate/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonatePage;
