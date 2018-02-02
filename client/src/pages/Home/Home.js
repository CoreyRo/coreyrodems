import React, { Component } from 'react'
import './Home.css'


class Home extends Component {
    state ={

    }

    render(){
        return(
            <div>       
                <div className='text-center intro'>
                    <div className='container'>
                        <div className='row'>
                        <span className='mx-auto intro-text-1'>Junior Full Stack Developer with a background in management and quality control.</span> 
                        </div>
                        <div className='row'>
                        <span className='mx-auto intro-text-2'>Recently completed the UC Irvine Fullstack Development Program.</span>
                        </div>
                        <img className="img-fluid skills-img" src="../public/imgs/skillbanner.png" alt="instagram pic" />

                    </div>
                </div>
                <div className='text-center wdskills-div'>
                    <div className='container-flex'>
                        <div className='row'>
                        <span className='mx-auto wd-text'>Competent in HTML5, ES6, JQuery, Node, Express, MongoDB, MySQL, WordPress and other full stack frameworks and languages.</span>
                        </div>
                        <img className="img-fluid skills-img" src="../public/imgs/wdbanner.png" alt="instagram pic" />
                    </div>
                </div>
                <div className='contactme-div'>
                    <div className='container text-center mx-auto'>
                        <h3 className='hobby-h'>For business inquiries</h3>
                        <a href="#contactForm"  data-toggle="modal" data-target="#contactForm"><button href="#contactForm" className='btn btn-primary btn-lg'>Contact Corey Rodems</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home