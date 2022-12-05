import React, {Fragment} from 'react';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import CaseSlide from '../../components/case';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import MetaHead from '../../components/MetaHead';
import PageHeader from '../../components/PageHeaders/PageHeaders';
import { housingContent } from '../../components/utils/contents';

const HousingAssistance = () => {
    return(
        <Fragment>
            <MetaHead />
            <Header/>
            <PageTitle pageTitle={'Housing Assistanve'} pagesub={'Housing Assistance'}/>
            <PageHeader imageUrl={'images/housing/Housing_Assistance.png'} headerContent={housingContent} />
            <CaseSlide/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HousingAssistance;
