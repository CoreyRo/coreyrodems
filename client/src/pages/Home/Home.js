import React, {Component} from 'react'
import Skills from '../../components/Skills'
import Intro from '../../components/Intro'
import {Col, Row, Container} from '../../components/Grid'
import './Home.css'

class Home extends Component {
    state = {}

    render() {

        return (
            <div>
                <Row>
                    <Intro/>
                </Row>
                <div className='wdskills-div'>
                    <Skills data="World"/>
                </div>
                <div className='contactme-div'>
                    <div className='container text-center mx-auto'>
                        <h3 className='hobby-h'>For business inquiries</h3>
                        <a href="#contactForm" data-toggle="modal" data-target="#contactForm">
                            <button href="#contactForm" className='btn btn-primary btn-lg'>Contact Corey Rodems</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home