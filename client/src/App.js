import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './components/Contact'
import About from './components/About'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import createBrowserHistory from 'history/createBrowserHistory'
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const history = createBrowserHistory()

// Get the current location.

class App extends Component {
	constructor(props){
		super(props)
		this.state={
			open: false
		}
	}
	
  	render() {
		history.listen((location, action) => {
		
		})
		return (
	  		<Router history={history}>
			  
				<div id='home'>	
					<Navbar />
					<Header />
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/projects' component={Gallery} />
					<Route exact path='/contact' component={Contact} />
					<div className='row container mx-auto'>
						<div className='col-md-12 '>
							<Contact />
						</div>
                	</div>
					<Footer />
				</div>
			</Router>
		)
  	}
}

export default App
