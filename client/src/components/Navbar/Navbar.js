import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
    return(
        <div className='sticky-top'>
        <nav className="navbar navbar-expand-md top-nav navbar-dark bg-dark">
            <div className='container-fluid'>
                <h3 className='nav-brand'>Corey Rodems Web Portfolio</h3>
                <ul className="navbar-nav nav-tabs list-group ml-auto" id="myNavBar">
                    <li className="nav-item">
                        <a className="nav-link soc-links" href="https://github.com/CoreyRo" rel="noopener noreferrer" target='_blank'><i class="fab fa-github"></i> Github <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link soc-links" href="https://www.linkedin.com/in/coreyrodems/" rel="noopener noreferrer" target='_blank'><i class="fab fa-linkedin"></i> Linkedin <span className="sr-only">(current)</span></a>
                    </li>
                </ul> 
            </div>
        </nav>
        <div className="mid-nav">
            <div className='container-fluid'>
                <h6 className='nav-brand'><i class="far fa-envelope"></i> Email me at <a href='mailto:coreyrodems@gmail.com'> coreyrodems@gmail.com</a></h6>
            </div>
        </div>
        <nav className="navbar navbar-expand-md bot-nav navbar-dark bg-dark">
            <div className='container-fluid '>              
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-haspopup="true" data-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
     
                <div className="collapse navbar-collapse nav-pos" id="navCollapse">
                
                    <ul className="navbar-nav nav-tabs list-group ml-auto" id="myNavBar">
                        <li className={window.location.pathname === '/' || window.location.pathname === '/home' ? 'active nav-item' : 'nav-item'}>
                            <Link className="nav-link bot-link" id='homeLink' to="/"><i class="fas fa-home"></i> Home<span className="sr-only">(current)</span></Link>
                        </li>

                        <li className={window.location.pathname === '/about' ? 'active nav-item' : 'nav-item'}>
                            <Link className="nav-link bot-link" to="/about"><i class="fas fa-info-circle"></i> About <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className={window.location.pathname === '/projects' ? 'active nav-item' : 'nav-item'}>
                            <Link className="nav-link bot-link" to="/projects"><i class="fas fa-folder-open"></i> Projects <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className={window.location.pathname === '/contact' ? 'active nav-item mr-sm-2' : 'nav-item mr-sm-2'}>
                            <a className="nav-link bot-link" href="#contactForm"  data-toggle="modal" data-target="#contactForm"><i class="fas fa-envelope"></i> Contact <span className="sr-only">(current)</span></a>
                        </li>
                    </ul> 
                   
                    <ul className="navbar-nav nav-tabs list-group ml-auto" id="myNavBar">
                    <div className="dropdown-divider"></div>
                        <li className="nav-item">
                            <a className="nav-link soc-links-collapse" href="https://github.com/CoreyRo" rel="noopener noreferrer" target='_blank'>Github <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link soc-links-collapse" href="https://www.linkedin.com/in/coreyrodems/" rel="noopener noreferrer" target='_blank'>Linkedin <span className="sr-only">(current)</span></a>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
        </div>
    )
}
    
export default Navbar