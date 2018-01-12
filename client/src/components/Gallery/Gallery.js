import React from 'react'
import './Gallery.css'

const Gallery = () => {

    return(
        <div id='gallery'>
            <div className='row mx-auto'>
                <div className='col-md-12'>
                        <h3 className='d-inline-block gallery-h1'>A few of my projects</h3>
                </div>
            </div>
            <div className='row mx-auto gallery-div'>
                <div className='col-md-12 '>

                    <div className='row gallery-div-sm'>
                        <div className='col-md-4 pic-div mx-auto'>
                            <div className="card" >
                                <a href="https://github.com/CoreyRo/gordonsbbq">
                                    <img className="card-img-top" src="../public/imgs/gbbq.png" alt="instagram pic" />
                                </a>
                                <div className="card-body">
                                    <span>
                                        <a href="http://www.gordonsbbq.net">
                                            <h5 className="card-title d-inline-block">gordonsbbq.net</h5>
                                        </a>
                                    </span>
                                    <p className="card-text">gordonsbbq.net is a personal blog and social media hub for Gordon Branchaud's BBQ projects.</p>  
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 pic-div mx-auto'>
                            <div className="card" >
                                <a href="https://github.com/CoreyRo/LIRIbot">
                                    <img className="card-img-top" src="../public/imgs/liri.png" alt="instagram pic" />
                                </a>
                                <div className="card-body">
                                        <h5 className="card-title d-inline-block">LIRIbot Node App</h5>
                                    <p className="card-text">Simple node app that collects data from specific APIs</p>  
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 pic-div mx-auto'>
                            <div className="card" >
                                <a href="https://github.com/CoreyRo/green-team-lfp">
                                    <img className="card-img-top" src="../public/imgs/lfp.png" alt="instagram pic" />
                                </a>
                                <div className="card-body">
                                    <span>
                                        <a href="http://projectlfp.herokuapp.com">
                                            <h5 className="card-title d-inline-block">projectlfp.herokuapp.com</h5>
                                        </a>
                                    </span>
                                    <p className="card-text">Looking for Project (tentative) is a social platform where developers of all skill levels can get together to collaborate on projects.</p>  
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row gallery-div-sm'>
                        <div className='col-md-4 pic-div mx-auto'>
                            <div className="card" >
                                <a href="https://github.com/CoreyRo/bamazon">
                                    <img className="card-img-top" src="../public/imgs/bam.png" alt="instagram pic" />
                                </a>
                                <div className="card-body">
                                        <h5 className="card-title d-inline-block">Bamazon Node App</h5>
                                    <p className="card-text">A Nodejs app that interacts with a MySQL database containing mock retail data.</p>  
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 pic-div mx-auto'>
                            <div className="card" >
                                <a href="https://github.com/erikamtnz13/green-team">
                                    <img className="card-img-top" src="../public/imgs/dc.png" alt="instagram pic" />
                                </a>
                                <div className="card-body">
                                    <span>
                                        <a href="https://dungeon-crusade.herokuapp.com/">
                                            <h5 className="card-title d-inline-block">projectlfp.herokuapp.com</h5>
                                        </a>
                                    </span>
                                    <p className="card-text">Dungeon Crusade is a single player turn-based browser game. The player encounters randomly generated and scripted enemies. Upgrade your character and play until defeated.</p>  
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 pic-div mx-auto'>
                            <div className="card" >
                                <a href="https://scratch.mit.edu/projects/159408717/#player">
                                    <img className="card-img-top" src="../public/imgs/cvm.png" alt="instagram pic" />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title d-inline-block">Cat's vs. Mice... In space</h5>
                                    <p className="card-text">My first ever programming endeavor using. Cats vs. Mice is a flash game created with scratch.mit.edu</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Visit my <a href='https://github.com/CoreyRo/'> Github </a> or <a href="#contactForm"  data-toggle="modal" data-target="#contactForm"> Contact </a> me for more info.</p>
            </div>
        </div>
    )
}

export default Gallery