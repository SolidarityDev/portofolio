
import React, { Component } from 'react'
import { Player } from 'video-react';
import video1 from "/Users/supermac/Desktop/portofolio-react/src/videos/LOTR .mp4";
import photo1 from "/Users/supermac/Desktop/portofolio-react/src/images/project1.png"
import video2 from "/Users/supermac/Desktop/portofolio-react/src/videos/Rest-Space.mp4";
import photo2 from "/Users/supermac/Desktop/portofolio-react/src/images/project2.png"
import video3 from "/Users/supermac/Desktop/portofolio-react/src/videos/Shopping-Cart .mp4";
import photo3 from "/Users/supermac/Desktop/portofolio-react/src/images/project3b.png"
import video4 from "/Users/supermac/Desktop/portofolio-react/src/videos/Me.mp4";
import photo4 from "/Users/supermac/Desktop/portofolio-react/src/images/project4.png"
import video5 from "/Users/supermac/Desktop/portofolio-react/src/videos/NETFLEX.mp4";
import photo5 from "/Users/supermac/Desktop/portofolio-react/src/images/project5.png"

class Projects extends Component {
 
    render () {
      return (
        <div id="Projects">
      <div className="projects-section">
      <div id="mini-section">
        <h4 id="projects-section-title">Some of My Work</h4>
        <span className="divider2"></span>
        </div>
        <div id="all-players-wrappers">
        <div className='player-wrapper'>
        <div className="player-title">Lords Of The Rings</div>
           <Player
      poster={photo1} id="holy"
      src={video1}  width="600px" height="300px"  controls="controls"
    />
     <div className="used">
        <ul className="used-items">
           <li className="used-item">HTML</li>
            <li className="used-item">CSS</li>
             <li className="used-item">BOOTSTRAP</li>
               </ul> 
               </div>
               </div>

        <div className='player-wrapper'>
        <div className="player-title">Rest-Space</div>
           <Player
      poster={photo2} id="holy"
      src={video2} width="600px" height="300px" controls="controls"
    />
    <div className="used">
        <ul className="used-items">
           <li className="used-item">HTML</li>
            <li className="used-item">CSS</li>
               </ul> 
               </div>
        </div>
        <div className='player-wrapper'>
        <div className="player-title">Shopping-Cart</div>
           <Player
      poster={photo3} id="holy"
      src={video3} width="600px" height="300px" controls="controls"
    />
    <div className="used">
        <ul className="used-items">
           <li className="used-item">HTML</li>
            <li className="used-item">CSS</li>
            <li className="used-item">JAVASCRIPT</li>
             <li className="used-item">BOOTSTRAP</li>
               </ul> 
               </div>
        </div>
        <div className='player-wrapper'>
        <div className="player-title">Me</div>
           <Player
      poster={photo4} id="holy"
      src={video4} width="600px" height="300px" controls="controls"
    />
    <div className="used">
        <ul className="used-items">
           <li className="used-item">HTML</li>
            <li className="used-item">CSS</li>
             <li className="used-item">BOOTSTRAP</li>
               </ul> 
               </div>
        </div>
        <div className='player-wrapper'>
        <div className="player-title">Netflex</div>
           <Player
      poster={photo5} id="holy"
      src={video5} width="600px" height="300px" controls="controls"
    />
    <div className="used">
        <ul className="used-items">
           <li className="used-item">HTML</li>
            <li className="used-item">CSS</li>
            <li className="used-item">JAVASCRIPT</li>
             <li className="used-item">BOOSTRAP</li>
             <li className="used-item">NODE.JS</li>
             <li className="used-item">EXPRESS.JS</li>
             <li className="used-item">REACT.JS</li>
               </ul> 
               </div>
        </div>
        </div>
        </div>
      </div>
      )
    }
  }

  export default Projects;