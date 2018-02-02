import React, { Component } from 'react'
import './About.css'

class About extends Component {
    state = {

    }

    componentDidMount (){

    }

    render (){

        return(
            <div>
                <div className='hobbies-div'>
                    <div className='container text-center mx-auto'>
                        <h3 className='hobby-h'>Gamer - Tech Enthusiast - BBQ Master</h3>
                        <img className="img-fluid hobby-img mx-auto" src="../public/imgs/hobbies.png" alt="corey-rodems" />
                        <h3 className='hobby-h'>Video Editor - Web Designer - KC Chiefs Fan</h3>
                    </div>


                </div>

                <div className="about-div-main">
                    <div className='container'>
                        <div className='' id='about' />
                        <div className='h-container col-md-12'>
                            <h2 className='my-h'>About Corey Rodems</h2>
                            <h4 className='my-h-sm'>Welcome to my website</h4>     
                        </div>
                        <div className='row about-text-div'>
                            <div className='col-md-12'>
                                <div className='row about-div-1 about'>
                                    <div className='col-md-3 d-center-block about-pic-div-2'>
                                        <img className="img-fluid mx-auto my-pic" src="../public/imgs/me.png" alt="corey-rodems" />
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
                                        <img className="img-fluid mx-auto my-pic" src="../public/imgs/me.png" alt="corey-rodems" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contactme-div'>
                    <div className='container text-center mx-auto'>
                        <h3 className='hobby-h'>For business inquiries</h3>
                        <a href="#contactForm"  data-toggle="modal" data-target="#contactForm"><button className='btn btn-primary btn-lg'>Contact Corey Rodems</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About