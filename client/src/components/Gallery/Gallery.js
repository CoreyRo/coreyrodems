import React from 'react'
import './Gallery.css'

const Gallery = () => {

    return (
        <div className='mx-auto'>
            <div className='container-fluid'>
                <div className='intro-cards intro'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div class="card">
                                <img class="card-img-top" src="../public/imgs/dev.png" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text">Mobile First Fullstack Development</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div class="card">
                                <img class="card-img-top" src="../public/imgs/art.png" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text">Digital Media Art and Design</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div class="card">
                                <img class="card-img-top" src="../public/imgs/video.png" alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text">Video Content Editing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='gallery-div' id='gallery'>
                <div className='container mx-auto'>
                    <div className='h-container-sm-b'>
                        <span className='my-h-sub-b'>Fullstack Development</span>
                        <span className='my-h-sub-sm'>Web Desgin / Web Development</span>
                    </div>
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        interval="5000"
                        data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to="0"
                                className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                        </ol>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="card mb-3">
                                    <a href="https://redivo-test-server.herokuapp.com/">
                                        <img className="card-img-top" src="../public/imgs/rg.jpg" alt="instagram pic"/>
                                    </a>
                                    <div className="card-body">
                                        <span>
                                            <a href="https://redivo-test-server.herokuapp.com/">
                                                <h5 className="card-title d-inline-block">The Redivo Group Realty</h5>
                                            </a>
                                        </span>
                                        <p className="card-text">WIP: The Redivo Group site is a real estate site that
                                            will list properties from an API. It is built with Reactjs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card mb-3">
                                    <a href="https://github.com/CoreyRo/gordonsbbq">
                                        <img
                                            className="card-img-top"
                                            src="../public/imgs/gbbq.png"
                                            alt="instagram pic"/>
                                    </a>
                                    <div className="card-body">
                                        <span>
                                            <a href="http://www.gordonsbbq.net">
                                                <h5 className="card-title d-inline-block">gordonsbbq.net</h5>
                                            </a>
                                        </span>
                                        <p className="card-text">gordonsbbq.net is a personal blog and social media hub
                                            for Gordon Branchaud's BBQ projects.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card mb-3">
                                    <a href="https://github.com/CoreyRo/coreyrodems">
                                        <img
                                            className="card-img-top"
                                            src="../public/imgs/cro.png"
                                            alt="coreyrodems.com pic"/>
                                    </a>
                                    <div className="card-body">
                                        <span>
                                            <a href="http://www.coreyrodems.com">
                                                <h5 className="card-title d-inline-block">coreyrodems.com</h5>
                                            </a>
                                        </span>
                                        <p className="card-text">coreyrodems.com is my personal portfolio site. It's
                                            written in React.js and utilizes bootstrap 4.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card mb-3">
                                    <a href="https://github.com/CoreyRo/LIRIbot">
                                        <img
                                            className="card-img-top"
                                            src="../public/imgs/liri.png"
                                            alt="instagram pic"/>
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title d-inline-block">LIRIbot Node App</h5>
                                        <p className="card-text">Simple node app that collects data from specific APIs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card mb-3">
                                    <a href="https://github.com/CoreyRo/green-team-lfp">
                                        <img className="card-img-top" src="../public/imgs/lfp.png" alt="instagram pic"/>
                                    </a>
                                    <div className="card-body">
                                        <span>
                                            <a href="http://projectlfp.herokuapp.com">
                                                <h5 className="card-title d-inline-block">Project: LFP</h5>
                                            </a>
                                        </span>
                                        <p className="card-text">Looking for Project (tentative) is a social platform
                                            where developers of all skill levels can get together to collaborate on
                                            projects.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card mb-3">
                                    <a href="https://github.com/CoreyRo/bamazon">
                                        <img className="card-img-top" src="../public/imgs/bam.gif" alt="instagram pic"/>
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title d-inline-block">Bamazon Node App</h5>
                                        <p className="card-text">A Nodejs app that interacts with a MySQL database containing mock retail data.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card mb-3">
                                    <a href="https://github.com/erikamtnz13/green-team">
                                        <img
                                            className="card-img-top"
                                            src="../public/imgs/dungeon.gif"
                                            alt="instagram pic"/>
                                    </a>
                                    <div className="card-body">
                                        <span>
                                            <a href="https://dungeon-crusade.herokuapp.com/">
                                                <h5 className="card-title d-inline-block">Dungeon Crusade</h5>
                                            </a>
                                        </span>
                                        <p className="card-text">Dungeon Crusade is a single player turn-based browser
                                            game. The player encounters randomly generated and scripted enemies.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="card mb-3">
                                    <a href="https://scratch.mit.edu/projects/159408717/#player">
                                        <img className="card-img-top" src="../public/imgs/cvm.gif" alt="instagram pic"/>
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title d-inline-block">Cat's vs. Mice... In space</h5>
                                        <p className="card-text">My first ever programming endeavor using. Cats vs. Mice
                                            is a flash game created with scratch.mit.edu</p>
                                    </div>
                                </div>
                            </div>
                            <a
                                class="carousel-control-prev"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a
                                class="carousel-control-next"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                    <div className='more-info'>
                        <p>Visi <a href='https://github.com/CoreyRo/' rel="noopener noreferrer" target='_blank'>
                                Github
                            </a>
                            or
                            <a href="#contactForm" data-toggle="modal" data-target="#contactForm">
                                Contact
                            </a>
                            me for more info.</p>
                    </div>
                </div>
            </div>
            <div className='video-div'>
                <div className='container'>
                    <div className='col-md-12 '>
                        <div className='h-container-sm-a col-md-12'>
                            <span className='my-h-sub-a'>Graphic Art</span>
                            <span className='my-h-sub-sm'>Digital Media Editing</span>
                        </div>
                        <div
                            className=''
                            style={{
                            position: 'relative',
                            paddingBottom: '56.25%',
                            paddingTop: '25px',
                            height: 0
                        }}>
                            <div
                                style={{
                                textAlign: 'center',
                                margin: 'auto'
                            }}>
                                <iframe
                                    id='my-vid'
                                    title='my-vid'
                                    allowFullScreen='allowFullScreen'
                                    src="https://www.youtube.com/embed/7MX4eNud6ZI?autoplay=0&loop=1&rel=0&showinfo=0&iv_load_policy=3"
                                    width="560"
                                    height="315"
                                    allowTransparency="true"
                                    style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%'
                                }}
                                    frameBorder="0"></iframe>
                            </div>
                        </div>
                        <div className='more-info'>
                            <p>Visit my <a href='https://github.com/CoreyRo/' rel="noopener noreferrer" target='_blank'> Github </a> or <a href="#contactForm" data-toggle="modal" data-target="#contactForm"> Contact </a> me for more info.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Gallery