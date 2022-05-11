import '../styles/AppBody.css'
import { useState, useEffect, useRef } from 'react'
import Typical from 'react-typical'
const AppBody = ()=> {
    return (
        <div className="app-body">
            <img className="home-bg" src="https://i.imgur.com/ISzYWxr.jpg" />
            <h1 className='home-title'>
              I'm a {' '}
              <Typical 
              loop={Infinity}
              wrapper="b"
              steps={[
                'developer',2100,
                'solutionist',2100,
                'designer', 2100,
                'creator', 2100
              ]}
              />
            </h1>
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
            <button className='contact-btn'> Contact Me </button>
        </div>
    )
}
export default AppBody