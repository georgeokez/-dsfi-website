import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Error from '../../components/404'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import MetaHead from '../../components/MetaHead';

const ErrorPage =() => {
    return(
        <Fragment>
             <MetaHead />
            <Header/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ErrorPage;

