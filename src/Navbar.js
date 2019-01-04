import React, { Component } from 'react'
import './Navbar.css';


class Navbar extends Component {
	render(){
		return (

			<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
	        <p className="navbar-brand">Matching Game</p>
	        <span className="navbar-toggler-icon"></span>
	       	</nav>
			)
	}
}

export default Navbar