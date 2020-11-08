
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import BackGround from '../images/portofoliowp2.jpg'
import SMART1 from '../images/smart1.jpg'
import codelogo from '../icons/peni1.svg';
import gitlogo from '../icons/giti.svg';
import linkdlogo from '../icons/linkme.svg';
import codemoblogo from '../icons/penipeni.svg';
import gitmoblogo from '../icons/gitgitgit.svg';
import linkmoblogo from '../icons/linked.svg';


const Header = () => {
  const scrollDown = () => window.scrollTo({ top: 900, behavior: "smooth" });
    return (
      <div>
        <div id="top-header">
          <div className="bg_image1"
        style={{
          backgroundImage: 'url('+SMART1+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
 <div className="navbar-nav">
               <ul>
                <Link to="#Aboutme"><li className="nav-item active"> <a href="#Aboutme">About Me</a></li> </Link>
                <Link to="#Projects"><li className="nav-item nav-link"> <a href="#Projects">My Work</a></li></Link>
                <li className="nav-item nav-link"> <a href="https://github.com/SolidarityDev/resume/blob/main/C.V.R.pdf" add target="_blank" rel="noopener noreferrer">C.V</a></li>
                </ul>
            </div>
            <div id="top-section-mobile">
            <div class="container">
            <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>Aribi Rachid</h1> 
            </div>
            </div>
            </div>
            <div class="container">
            <div class="row">
            <div id="list-icon">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a className="codepenmob" href="https://codepen.io/raffa-rin" target="_blank" rel="noopener noreferrer"><img src={codemoblogo} alt="codepen-link"></img></a>
              <a className="githubmob" href="https://github.com/SolidarityDev" target="_blank" rel="noopener noreferrer"><img src={gitmoblogo}  alt="github-link"></img></a>
              <a className="linkedinmob" href="https://www.linkedin.com/in/rachid-aribi/" target="_blank" rel="noopener noreferrer"><img src={linkmoblogo} alt="linkdin-link"></img></a>
            </div>
            </div>
          </div>
            </div>
            </div>
            <div className="arrowd" onClick={scrollDown}>
                <span></span>
                <span></span>
                <span></span>
</div>
</div>
</div>

  <div id="top-section-2">
       <div className="bg_image"
        style={{
          backgroundImage: 'url('+BackGround+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
           <div className="navbar-nav">
               <ul>
                <Link to="#Aboutme"><li className="nav-item active"> <a href="#Aboutme">About Me</a></li> </Link>
                <Link to="#Projects"><li className="nav-item nav-link"> <a href="#Projects">My Work</a></li></Link>
                <li className="nav-item nav-link"> <a href="https://solidaritydev.github.io/resume/CV.R.pdf" add target="_blank" rel="noopener noreferrer">C.V</a></li>
                </ul>
            </div>
          <div id="top-section">
            <div class="container">
                <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Aribi Rachid</h1> 
            </div>
            </div>
            <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul id="list-inline social-buttons animated fadeIn">
                      
                      <li><a className="codepen" href="https://codepen.io/raffa-rin" target="_blank" rel="noopener noreferrer"><img src={codelogo} alt="codepen-link"></img></a></li>
                     
                      <li><a className="github" href="https://github.com/SolidarityDev" target="_blank" rel="noopener noreferrer"><img src={gitlogo}  alt="github-link"></img></a></li>
                      
                      <li><a className="linkedin" href="https://www.linkedin.com/in/rachid-aribi/" target="_blank" rel="noopener noreferrer"><img src={linkdlogo} alt="linkdin-link"></img></a></li>
                  </ul>
            </div>
            </div>
            
            </div>
            </div>
            <div className="arrowd" onClick={scrollDown}>
                <span></span>
                <span></span>
                <span></span>
            
                </div>
            </div>
</div>
          </div>
    )
}

export default Header