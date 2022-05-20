import '../styles/AppBody.css'
import { useState, useEffect, useRef } from 'react'
const AppBody = ()=> {
    return (
        <div className="app-body">
            <img className="home-bg" src="https://i.imgur.com/ISzYWxr.jpg" />
            <h1 className='home-title'>I'm a</h1>
            <div className='container'>
              <div className='typed-out'>

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
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Contact Me</span>
              </button>
            </div> 
        </div>
    )
}
export default AppBody