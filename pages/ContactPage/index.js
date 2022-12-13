import React, {Fragment} from 'react';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import MetaHead from '../../components/MetaHead';
import PageHeader from '../../components/PageHeaders/PageHeaders';
import { contactDetials, socialAccounts } from '../../components/utils/contents';


const ContactUsPage = () => {
    return(
        <Fragment>
            <MetaHead />
            <Header/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact Us'}/>
            <PageHeader imageUrl={'images/contact_us.png'} />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactUsPage;