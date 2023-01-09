import React from 'react';
import Content from './Content';
import { addon1, addon2, addon3, addon4 } from '../../utils/contents';

const { content1, title1 } = addon1;
const { content2, title2 } = addon2;
const { content3a, content3b, content3Items, title3 } = addon3;
const { content4, content4Items, title4 } = addon4;
const extraContent3 = { 
    content : content3b, 
    contentItems : content3Items 
};
const extraContent4 = { 
    content : '', 
    contentItems : content4Items 
}

const AboutAddOns = () => {
  return (
    <div className="addon-wrapper">
        <div className="addon-wrapper-item-gray">
            <div className="about-add-ons-container">
                <div className="about-add-ons-item adout-add-ons-reverse">
                    <img src='images/about/addons/dsfi_about_addon_pic_1.png' height="400" width="600" alt=""/> 
                    <Content context={content1} title={title1} />
                </div>
            </div>
        </div> 
        <div className="addon-wrapper-item-white">
            <div className="about-add-ons-container">
                <div className="about-add-ons-item">
                    <Content context={content2} title={title2} />
                    <img src='images/about/addons/dsfi_about_addon_pic_2.png' height="400" width="500" alt=""/> 
                </div>
            </div>
        </div>   
        <div className="addon-wrapper-item-gray">
            <div className="about-add-ons-container">
                <div className="about-add-ons-item adout-add-ons-reverse">
                    <img src='images/about/addons/dsfi_about_addon_pic_3.png' height="500" width="500" alt=""/> 
                    <Content context={content3a} title={title3} extraContent={extraContent3} />
                </div>
            </div>
        </div>
        <div className="addon-wrapper-item-white">
            <div className="about-add-ons-container">
                <div className="about-add-ons-item">
                    <Content context={content4} title={title4} extraContent={extraContent4} />
                    <img src='images/about/addons/dsfi_about_addon_pic_4.png' height="450" width="600" alt=""/> 
                </div>
            </div>
        </div>        
    </div>
  )
}

export default AboutAddOns;