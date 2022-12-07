import React, {Fragment} from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import CaseSingle from '../../components/CaseSingle';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import MetaHead from '../../components/MetaHead';
import { 
  CONFLICT_RESOLUTION_AWARENESS,
  DOMESTIC_VIOLENCE_AWARENESS,
  MENTAL_HEALTH_AWARENESS,
  YOUTH_EMPOWERMENT
 } from '../../components/utils/constants';
import { 
  conflictResolutionImageUrl, 
  domesticViolenceImageUrl, 
  mentalHealthImageUrl, 
  youthEmpowermentImgUrl 
} from '../../components/utils/imageUrl';
import { 
  conflictResolutionCauseContext, 
  domesticViolenceCauseContext, 
  mentalHealthCauseContext, 
  youthEmpowermentCauseContext 
} from '../../components/utils/contents';
import CaseSlide from '../../components/case';

const CaseDynamicPage =() => {

  const router = useRouter();
  const { caseId } = router.query;

  const displayDynamiCase = () => {
    switch (caseId) {
      case CONFLICT_RESOLUTION_AWARENESS:
        return <CaseSingle
                  imageUrl={conflictResolutionImageUrl}
                  context={conflictResolutionCauseContext}
                />
      case DOMESTIC_VIOLENCE_AWARENESS:
        return <CaseSingle 
                  imageUrl={domesticViolenceImageUrl}
                  context={domesticViolenceCauseContext}
                />     
      case MENTAL_HEALTH_AWARENESS:
        return <CaseSingle 
                  imageUrl={mentalHealthImageUrl}
                  context={mentalHealthCauseContext}
                />
      case YOUTH_EMPOWERMENT:
        return <CaseSingle 
                  imageUrl={youthEmpowermentImgUrl}
                  context={youthEmpowermentCauseContext}
                />
      default:
        return <div>Page Not Found</div>
    }
  }


  return(
      <Fragment>
          <MetaHead />
          <Header/>
          <PageTitle pageTitle={'Causes'} pagesub={'Our Causes'}/> 
          {displayDynamiCase()}
          <CaseSlide/>
          <Footer/>
          <Scrollbar/>
      </Fragment>
  )
};
export default CaseDynamicPage;
