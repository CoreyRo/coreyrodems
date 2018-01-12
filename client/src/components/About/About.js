import React, { Component } from 'react'
import './About.css'

class About extends Component {
    state = {

    }

    componentDidMount (){

    }

    render (){

        return(
            <div className='scroll-adjust' id='about'>
                <div className='text-center intro mx-auto'>
                    <div className='row'>
                    <span className='mx-auto intro-text'>Junior Full Stack Developer with a background in management and quality control.</span> 
                    </div>
                    <div className='row'>
                    <span className='mx-auto intro-text'>Recently completed the UC Irvine Fullstack Development Program.</span>
                    </div>
                    <div className='row'>
                    <span className='mx-auto intro-text'>Competent in HTML5, ES6, JQuery, Node, Express, MongoDB, MySQL and other full stack frameworks and languages.</span>
                    </div>
                    <div className='row'>
                    <span className='mx-auto intro-text'>For business inquieries contact me at <a href='mailto:coreyrodems@gmail.com'>coreyrodems@gmail.com</a></span>
                    </div>
                </div>
                <div className='intro-sep mx-auto text-center'>. . .</div>
                <div className='col-md-12'>
                    <h3 className='about-h'>About Corey Rodems</h3>     
                </div>
                <div className='row about-text-div'>
                    <div className='col-md-12'>
                        <div className='row about-div-1 about'>
                            <div className='col-md-3 d-center-block about-pic-div-2'>
                                <img className="img-fluid mx-auto gordon-pic" src="../public/imgs/me1.jpg" alt="corey-rodems" />
                            </div>
                            <div className='col-md-9 about-div about-text-div-1'>
                                <p className='about-text'>I’ve always been fascinated by how things work and technology in general. 
                                I loved to take things apart to see if I could put them back together again. </p> 
                                <p className='about-text'>I remember the first computer my parents had. It was an Apple with a clunky CRT monitor and noisy hardware. 
                                While the stock games were fun, I really wanted to know how it worked. I discovered the settings option, and everything changed. 
                                I changed EVERYTHING you could customize. New backgrounds, mouse pointers, system sounds, and so on.
                                Of course, my parents were annoyed that whenever they turned on the computer everything was different, but I was already hooked.</p> 
                                <p className='about-text'>I loved computer games and online communities. I made my first site in middle school using some GeoCities template. 
                                I played around with html and QBasic even though most of it was over my head back then, but I liked the challenge. 
                                Technology is always interesting and always advancing and the challenge to keep up with it is what drives my passion for tech.</p>
                            </div>
                            <div className='col-md-3 d-center-block about-pic-div-1'>
                                <img className="img-fluid mx-auto gordon-pic" src="../public/imgs/me1.jpg" alt="corey-rodems" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About