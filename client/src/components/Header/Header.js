import React from 'react'
import './Header.css'
import Carousel from '../Carousel/Carousel';

const Header = (props) => {
	return(
		<div className='header-div'>
			<div className='container mx-auto'>
			<h1 className='brand-img-head text-center d-center-block'>Corey Rodems</h1>
			<h4 className='brand-img-sub text-center d-center-block'>Junior Fullstack Developer</h4>
			</div>
			<Carousel />
			
		</div>
	)
	
}

export default Header