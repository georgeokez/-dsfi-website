
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
                                title="Domestic Violence Awareness"
                                raisedValue="7,500"
                                goalValue="15,000"
                                progressValue={65.5}
                                imageUrl="images/case/rsz_1domestic_violence.jpeg"
                                clickHandler={clickHandler}
                            />
                            <CauseCard
                                title="Conflict Resolution Awareness"
                                raisedValue="6,500"
                                goalValue="12,000"
                                progressValue={50.5}
                                imageUrl="images/case/rsz_counseling_support.jpeg"
                                clickHandler={clickHandler}
                            />
                            <CauseCard
                                title="Youth Empowerment"
                                raisedValue="9,000"
                                goalValue="20,000"
                                progressValue={48.5}
                                imageUrl="images/case/rsz_2empowerment.jpeg"
                                clickHandler={clickHandler}
                            />
                            <CauseCard
                                title="Mental Health Awareness"
                                raisedValue="13,000"
                                goalValue="25,000"
                                progressValue={52.0}
                                imageUrl="images/case/rsz_mental_health.jpeg"
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
          
          
          
          
