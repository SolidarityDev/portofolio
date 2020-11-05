import React from 'react'
import Logocloud from '../icons/logocloud.svg';
import HTMLLOGO from "../icons/html-5.svg"
import CSSLOGO from "../icons/css.svg"
import JSLOGO from "../icons/javascript.svg"
import REACTLOGO from "../icons/reactjs.svg"
import NODELOGO from "../icons/nodejs.svg"


const Cv = () => {

    return (
      
            <div className="cv-section">
                <img className="logo-html" src={HTMLLOGO} alt="html-logo"></img>
                <img className="logo-css" src={CSSLOGO} alt="css-logo"></img>
                <img className="logo-js" src={JSLOGO} alt="js-logo"></img><br></br>
                <img className="logo-react" src={REACTLOGO} alt="react-logo"></img>
                <img className="logo-node" src={NODELOGO} alt="node-logo"></img>
                <u><span className="text">MY RESUME</span></u><br></br>
                <div className="things1">
                <div className="content1">
                    <div className="arrow1">
                        <div className="curve1"></div>
                        <div className="point1"></div>
                        <p id="yy">Click!</p>
                    </div>
                </div> 
            </div>  
                <a className="block-btn" href="https://solidaritydev.github.io/resume/CV_2020-10-02_Rachid_Aribi.pdf"  add target="_blank" rel="noopener noreferrer"> <img src={Logocloud} className="cloud-logo" alt="cv-logo" /> </a>  
                <img className="gif-image" loading="lazy" src="https://cms.momkai.com/dynamic/illustrations/momkai_home_sittingonpencil_large.gif" alt="gif-cv"></img>
            </div>
    
    )
}

export default Cv