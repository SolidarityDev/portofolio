import React from 'react'
import codelogo from '/Users/supermac/Desktop/portofolio-react/src/icons/codepen.svg';
import gitlogo from '/Users/supermac/Desktop/portofolio-react/src/icons/github.svg';
import linkdlogo from '/Users/supermac/Desktop/portofolio-react/src/icons/linkdin.svg';
import rocketlogo from '/Users/supermac/Desktop/portofolio-react/src/icons/rocket.svg';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
      
            <div id="footer-section">
                        <ul id="list-inline social-buttons animated fadeIn">
                      
                            <li><a className="codepen" href="https://codepen.io/raffa-rin" target="_blank" rel="noopener noreferrer"><img src={codelogo} alt="codepen-link"></img></a></li>
                           
                            <li><a className="github" href="https://github.com/SolidarityDev" target="_blank" rel="noopener noreferrer"><img src={gitlogo}  alt="github-link"></img></a></li>
                            
                            <li><a className="linkedin" href="https://www.linkedin.com/in/rachid-aribi/" target="_blank" rel="noopener noreferrer"><img src={linkdlogo} alt="linkdin-link"></img></a></li>
                        </ul>
                        <div className="page-scroll">
                            <a id="to-top" className="page-scroll" href="#page-top">
                                <img id="rocket" onClick={scrollToTop} src={rocketlogo} alt="rocket-to-top"></img>
                            </a>
                            <p id="to-top-copy">Beam me up, Scotty!</p>
                        </div>
                        <div className="copyright">
                           
                            <p><i className="fa fa-copyright"></i> © Aribi Rachid 2020</p>
                        </div>
            </div>
            
    
    )
}

export default Footer