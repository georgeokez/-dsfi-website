import React, {Fragment} from 'react';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import CaseSlide from '../../components/case';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import MetaHead from '../../components/MetaHead';
import PageHeader from '../../components/PageHeaders/PageHeaders';
import { legalContent } from '../../components/utils/contents';

const LegalAssistance = () => {
    return(
        <Fragment>
            <MetaHead />
            <Header/>
            <PageTitle pageTitle={'Legal Assistance'} pagesub={'Legal Assistance'}/>
            <PageHeader imageUrl={'images/legal/legal_Assistance.png'} headerContent={legalContent} />
            <CaseSlide/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default LegalAssistance;
