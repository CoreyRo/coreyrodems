import React, { Component } from 'react'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Gallery from '../../components/Gallery'
import './Home.css'


class Home extends Component {
    state ={

    }

    render(){
        return(
            <div>       
                <div className='text-center intro'>
                    <div className='row'>
                    <span className='mx-auto intro-text-1'>Junior Full Stack Developer with a background in management and quality control.</span> 
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
            </div>
        )
    }
}

export default Home