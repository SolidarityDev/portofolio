
import React, { Component } from 'react'
import QierPlayer from 'qier-player';
import video1 from "../videos/LOTR .mp4";
import video2 from "../videos/Rest-Space.mp4";
import video3 from "../videos/Shopping-Cart .mp4";
import video4 from "../videos/Me.mp4";
import video5 from "../videos/NETFLEX.mp4";

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
        <QierPlayer srcOrigin={video1} />
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
        <QierPlayer srcOrigin={video2} />
    <div className="used">
        <ul className="used-items">
           <li className="used-item">HTML</li>
            <li className="used-item">CSS</li>
               </ul> 
               </div>
        </div>
        <div className='player-wrapper'>
        <div className="player-title">Shopping-Cart</div>
        <QierPlayer srcOrigin={video3} />
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
            <QierPlayer srcOrigin={video4} />
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
        <QierPlayer srcOrigin={video5} />
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