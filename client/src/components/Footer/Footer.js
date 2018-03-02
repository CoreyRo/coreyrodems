import React, { Component } from 'react'
import './Footer.css'
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Footer extends Component {

    constructor(props)
    {
        super(props)
        this.state =
        {
            regEmail: ''
        }
    }

    handleInputChange = (event) =>
    {
        const { name, value } = event.target
        this.setState(
        {
            [name]: value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
    }

    handleSubmit = (event) =>
    {
        // event.preventDefault()
        // axios.post('/api/mailer/join-mailer', { newUser: this.state.regEmail })
        // .then(res => console.log("submit ", res))
        // this.setState({ regEmail: '' })
    }

    render()
    {
        return (
            <footer className="footer col-sm-12">
                <div className='row'>
                    <div className="footerBot mx-auto col-sm-12">
                        <div className='container'>
                            <div className='row soc-media-links'>
                                <div className='col-4'>
                                <div className='soc-media-div'>
                                <a className="" href="https://github.com/CoreyRo" rel="noopener noreferrer" target='_blank'>
                                <img className="soc-media-icon img-fluid" alt="github logo" src="../public/imgs/white-github.png" />
                                </a>
                                </div>
                                <p className='follow-text'> See my projects on Github </p>
                                </div>

                                <div className='col-4'>
                                <div className='soc-media-div'>
                                <a className="" href="https://www.linkedin.com/in/coreyrodems/" rel="noopener noreferrer" target='_blank'>
                                <img className="soc-media-icon img-fluid" alt="linkedin logo" src="../public/imgs/lilogo.png" />
                                </a>
                                </div>
                                <p className='follow-text'> Follow me on Linkedin </p>
                                </div>

                                <div className='col-4'>
                                <div className='soc-media-div'>
                                    <a href="https://www.twitch.tv/coreyro" rel="noopener noreferrer" target="_blank">
                                    <img className="soc-media-icon img-fluid" alt="github logo" src="../public/imgs/twitchlogo.png" />
                                    </a>
                                    </div>
                                    <p className='follow-text'> Follow me on Twitch </p>
                                </div>
                            </div>
                            <div className='footer-info'>
                                <p className='footer-info-text'>Corey Rodems</p>
                                <p className='footer-info-text' type='email'><a href='mailto:coreyrodems@gmail.com'>coreyrodems@gmail.com</a></p>
                                <p className='footer-info-text'>Copyright 2018</p>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
        )
    }

}

export default Footer