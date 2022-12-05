import React, {Fragment} from 'react';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import CaseSlide from '../../components/case';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import MetaHead from '../../components/MetaHead';
import { partnershipContent } from '../../components/utils/contents';
import PageHeader from '../../components/PageHeaders/PageHeaders';

const Partnership = () => {
    return(
        <Fragment>
            <MetaHead />
            <Header/>
            <PageTitle pageTitle={'Partner with Us'} pagesub={'Partnership'}/>
            <PageHeader imageUrl={'images/partnership/Partnership.png'} headerContent={partnershipContent} />
            <CaseSlide/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Partnership;
