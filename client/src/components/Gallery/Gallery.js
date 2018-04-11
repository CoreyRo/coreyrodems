import React from 'react'
import './Gallery.css'
import Accordian from '../../components/Accordian'
import data from '../../components/Accordian/data.js'
import {Col, Row, Container} from '../../components/Grid'

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

                <Row>
                    <Accordian data={data}/>
                </Row>
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
                            <p>Visit my <a href='https://github.com/CoreyRo/' rel="noopener noreferrer" target='_blank'> Github</a> or <a href="#contactForm" data-toggle="modal" data-target="#contactForm"> Contact</a> me for more info.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Gallery