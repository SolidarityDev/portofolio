import React from 'react'
import Logocloud from '../icons/logocloud.svg';
import HTMLLOGO from "../icons/html-5.svg"
import CSSLOGO from "../icons/css.svg"
import JSLOGO from "../icons/javascript.svg"
import REACTLOGO from "../icons/reactjs.svg"
import NODELOGO from "../icons/nodejs.svg"
import RESUMELOGO from "../icons/resume.svg"


const Cv = () => {

    return (
      <div>
            <div className="cv-section">
            <u><span className="text">MY RESUME</span></u><br></br> 
            <div class="container">
                <div class="row">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <img className="logo-resume" src={RESUMELOGO} alt="node-logo"></img>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="things1">
                <div className="content1">
                    <div className="arrow1">
                        <div className="curve1"></div>
                        <div className="point1"></div>
                        <p id="yy">Click!</p>
                    </div>
                </div> 
            </div> 
                <a className="block-btn" href="https://solidaritydev.github.io/resume/CV.R.pdf"  add target="_blank" rel="noopener noreferrer"> <img src={Logocloud} className="cloud-logo" alt="cv-logo" /> </a>
                </div>  
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <img className="gif-image" loading="lazy" src="https://cms.momkai.com/dynamic/illustrations/momkai_home_sittingonpencil_large.gif" alt="gif-cv"></img>
            </div>
            
        </div>
    </div>
    </div>


            <img className="logo-html" src={HTMLLOGO} alt="html-logo"></img>
                <img className="logo-css" src={CSSLOGO} alt="css-logo"></img>
                <img className="logo-js" src={JSLOGO} alt="js-logo"></img><br></br>
                <img className="logo-react" src={REACTLOGO} alt="react-logo"></img>
                <img className="logo-node" src={NODELOGO} alt="node-logo"></img>
    </div>
    )
}

export default Cv