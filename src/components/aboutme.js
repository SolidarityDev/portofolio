import React from 'react'
import ImageShot from "../images/imageshot.png"

const Aboutme = () => {
    return (
        <div>
            <div id="Aboutme">
            <div id="about-wrapper">
            <div className="things">
  <div className="content">
    <div className="arrow">
      <div className="curve"></div>
      <div className="point"></div>
    </div>
  </div> 
</div> 

            <div className="section-aboutme">
            <h2 className="section-heading">Hey, I'm Rachid.</h2>
            <h3 className="section-subheading">I'm a design-minded, passionate about combining beautiful code with beautiful design.</h3>
                <span className="divider"></span>
                <div className="about-text-wrapper">
                <div id="divided-wrapper">

                <div class="container">
                <div class="row">
                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                  </div>
                    <div class="col-xs-2 col-sm-4 col-md-6 col-lg-6">
                    <p className="text-wrapper">"Endowed with a rich professional and associative experience, I evolve today by
converting into the world of I.T.
Currently in training as a Full-stack Web Developer, I am now looking for a work-study program to complete my training.<br></br>
For the future I want to carry out various associative projects which are close to my heart thanks to digital technology." </p>
                    </div>
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div class="col-xs-2 col-sm-2 col-md-4 col-lg-4">
                    <img className="img-wrapper"src={ImageShot} alt="wrapper-logo"></img>
                    </div>
                </div>
            </div>
            </div>
            </div>
          </div>
            </div> 
            </div>
            </div>
    )
}

export default Aboutme
