
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import BackGround from '/Users/supermac/Desktop/portofolio-react/src/images/portofoliowp2.jpg'


const Header = () => {
  const scrollDown = () => window.scrollTo({ top: 1200, behavior: "smooth" });
    return (
        <div>

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
                <li className="nav-item nav-link"> <a href="https://solidaritydev.github.io/resume/CV_2020-10-02_Rachid_Aribi.pdf" add target="_blank" rel="noopener noreferrer">C.V</a></li>
                </ul>
            </div>

            <h1>Aribi Rachid</h1>  
          
            </div> 
            <div className="arrowd" onClick={scrollDown}>
                <span></span>
                <span></span>
                <span></span>
            
  
</div>
          </div>
    )
}

export default Header