import { useState } from 'react';
import { Link } from 'react-router-dom'
import Card from '../Card/Card.jsx';
import  SearchBar  from '../SearchBar/SearchBar.jsx'

function Nav(){

	return(
		<nav>
			<h1>Nav</h1>
			<Link>Home</Link>
			<Link>About</Link>
		</nav>
	)
}

export default Nav
