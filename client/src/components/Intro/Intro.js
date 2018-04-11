import React from 'react'
import './Intro.css'

const Intro = (props) => {

    return (
        <div id='intro' className='text-center intro'>
            <div className='container-fluid'>
                <div className='row'>
                    <span className='mx-auto intro-text-1'>
                        <i className="fas fa-code fa-lg"></i>
                        Junior Full Stack Developer with a background in management and quality control.</span>
                </div>
                <div className='row'>
                    <span className='mx-auto intro-text-2'>
                        <i className="fas fa-graduation-cap fa-lg"></i>
                        Recently completed the UC Irvine Fullstack Development Program.</span>
                </div>
                <div className='intro-cards'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className="card">
                                <img className="card-img-top" src="../public/imgs/dev.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Mobile First Fullstack Development</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className="card">
                                <img className="card-img-top" src="../public/imgs/art.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Digital Media Art and Design</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className="card">
                                <img className="card-img-top" src="../public/imgs/video.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Video Content Editing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro