
import React from "react";
import Slider from "react-slick";
import CauseCard from "./CauseCard";
import { sliderSettings } from "./settings";

const CaseSlide = (props) => {
    const clickHandler = () =>{
        window.scrollTo(10, 0);
    }

    return (
        <div className="wpo-case-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <h2>Popular Causes What You Should Know</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-case-wrap">
                    <div className="wpo-case-slider">
                        <Slider {...sliderSettings}>
                            <CauseCard
                                title="Providing Housing Assistance to Individauls and Families"
                                raisedValue="7,500"
                                goalValue="15,000"
                                progressValue={65.5}
                                imageUrl="images/case/social-Housing.jpeg"
                                clickHandler={clickHandler}
                            />
                            <CauseCard
                                title="Providing Legal Assistance to Individauls and Families"
                                raisedValue="6,500"
                                goalValue="12,000"
                                progressValue={50.5}
                                imageUrl="images/case/legal-assistance.png"
                                clickHandler={clickHandler}
                            />
                            <CauseCard
                                title="Providing Counseling and Support to People"
                                raisedValue="9,000"
                                goalValue="20,000"
                                progressValue={48.5}
                                imageUrl="images/case/counseling_n_support.png"
                                clickHandler={clickHandler}
                            />
                            <CauseCard
                                title="Promoting mental health awareness in communities"
                                raisedValue="13,000"
                                goalValue="25,000"
                                progressValue={52.0}
                                imageUrl="images/case/mental-health.png"
                                clickHandler={clickHandler}
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default CaseSlide;
          
          
          
          
