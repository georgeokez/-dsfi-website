import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import CaseSingle from '../../components/CaseSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'
import MetaHead from '../../components/MetaHead';

const CaseSinglePage =() => {
    return(
        <Fragment>
            <MetaHead />
            <Header/>
            <PageTitle pageTitle={'Causes'} pagesub={'Our Causes'}/> 
            <CaseSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePage;
