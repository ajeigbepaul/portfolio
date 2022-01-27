import React from 'react'
import './Intro.css'

function Intro() {
    return (
        <div className="intro">
           <div className="intro__body">
               <div className="intro__scroll">
               <div className="static">I am</div>
                <div className="animation">
                        <div className="text text1"><span className="cursor">Ajeigbe Paul</span></div>
                        <div className="text text2"><span className="cursor">A Software Developer</span></div>
                        <div className="text text3"><span className="cursor">Who You Need For Your Next Project</span></div>

                </div>
               </div>
                
            </div>
            <div className="intro__cv">
                <button className="intro__btn">
                    <span>Download CV</span>
                </button>
            </div>
            
        </div>
    )
}

export default Intro
