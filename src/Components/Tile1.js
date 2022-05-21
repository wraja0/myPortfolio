import '../styles/Tile1.css'
import { useState, useEffect, useRef } from 'react'
const Tile1 = ()=> {
    return (
        <div>
            <h1 className='home-title'>I'm a</h1>
            <div className='container'> 
              <div className='home-title typed-out typer1'>
                Web Developer
              </div>
            </div>
            <br />
            <div className='container'> 
              <div className='home-title typed-out typer2'>
                Web Developer
              </div>
            </div>
            <br />
            <div className='container'> 
              <div className='home-title typed-out typer3'>
                Web Developer
              </div>
            </div>
            <div className='pre-content'>
              <div className='pre-projects'>
              </div>
              <div className='pre-exp'>
              </div>
            </div>
            <div className='skill-thumbnails'>
              <div className='react-thumbnail'>
              </div>
              <div className='node-thumbnail'>
                </div>
                <div className='postgreSQL-thumbnail'>
                </div>
            </div>
            <div id="container">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Contact Me</span>
              </button>
            </div> 
        </div>
    )
}
export default Tile1