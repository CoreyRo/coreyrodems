import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


class App extends Component {
	constructor(props){
		super(props)
		this.state={
			open: false
		}
	}
	
  	render() {
		return (
	  		<Router>
				<div id='home'>	
					<Navbar />
					<Header />
					<div className='text-center intro'>
						<div className='row'>
						<span className='mx-auto intro-text'>Junior Full Stack Developer with a background in management and quality control.</span> 
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
					<Route path='/' component={Home} />
					<Footer />
				</div>
			</Router>
		)
  	}
}

export default App
