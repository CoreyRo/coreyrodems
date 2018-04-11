import React from 'react'
import Swiper from '../Swiper'
import './Skills.css'

const Skills = (props) => {
    return (

        <div className='text-center wdskills-div'>
            <div className='container-fluid'>
                <div className='row mx-auto text-center'>
                    <div id='skills' className='col-12'>
                        <Swiper
                            items={[
                            {
                                img: 'mobile-first.png',
                                txt: 'Mobile First Development',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'html5-css3-js.png',
                                txt: 'Fullstack Development',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'Node.png',
                                txt: 'Node.js Applications',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'react-logo.png',
                                txt: 'React.js Applications',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'Mongodb-logo.png',
                                txt: 'Mongo Databases',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'MySQL.svg.png',
                                txt: 'MySQL Databases',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'jquery-icon.png',
                                txt: 'jQuery Library',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'handlebars_logo.png',
                                txt: 'Handlebars MVC',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'Expressjs.png',
                                txt: 'Express Applications',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'php-logo.svg',
                                txt: 'php language',
                                class: 'skill-img img-fluid'
                            }, {
                                img: 'wordpress-logo.png',
                                txt: 'Wordpress & php',
                                class: 'skill-img img-fluid'
                            }
                        ]}
                            settings={{
                            dots: true,
                            arrows: true,
                            infinite: true,
                            initialSlide: 0,
                            slidesToScroll: 1,
                            slidesToShow: 3,
                            swipeToSlide: true,
                            centerMode: true,
                            centerPadding: '0px',
                            speed: 800,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1,
                                        arrows: true
                                    }
                                }, {
                                    breakpoint: 768,
                                    settings: {
                                        initailSlide: 1,
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        arrows: true
                                    }
                                }, {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        centerMode: false,
                                        centerPadding: '0px',
                                        arrows: true
                                    }
                                }
                            ]
                        }}/>
                    </div>
                </div>
                <div className='container'>
                    <hr/>
                    <h2 className=''>Competent in...
                    </h2>
                    <br/>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <ul>
                                <li>
                                    <i className="fab fa-html5"></i>
                                    HTML5
                                </li>
                                <li>
                                    <i className="fab fa-js"></i>
                                    ES6
                                </li>
                                <li>
                                    <i className="fab fa-css3-alt"></i>
                                    CSS3
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-4'>
                            <ul>
                                <li>
                                    <i className="fab fa-node-js"></i>
                                    Node.js &amp; Express
                                </li>
                                <li>
                                    <img
                                        src="../public/imgs/mysql.png"
                                        className='img-fluid'
                                        alt="Smiley face"
                                        height="24"
                                        width="24"/>
                                    MySql &amp; Sequelize
                                </li>

                                <li>
                                    <img
                                        src="../public/imgs/mongod.png"
                                        className='img-fluid'
                                        alt="Smiley face"
                                        height="18"
                                        width="18"/>
                                    MongoDB &amp; Mongoose
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-4'>
                            <ul>
                                <li>
                                    <i className="fab fa-react"></i>
                                    React.js
                                </li>
                                <li>
                                    <img
                                        src="../public/imgs/jquery.png"
                                        className='img-fluid'
                                        alt="Smiley face"
                                        height="24"
                                        width="24"/>
                                    jQuery
                                </li>
                                <li>
                                    <i className="fab fa-wordpress"></i>
                                    WordPress
                                </li>
                            </ul>
                        </div>
                    </div>

                    ...and other full stack frameworks and languages.
                    <hr/>
                </div>

            </div>
        </div>

    )
}

export default Skills