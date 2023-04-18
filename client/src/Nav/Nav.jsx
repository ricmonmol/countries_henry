import { Link } from 'react-router-dom'
import  SearchBar  from '../SearchBar/SearchBar.jsx'

function Nav(){
	return(
		<nav>
			<h1>Nav</h1>
			<Link>Home</Link>
			<Link>About</Link>
			<SearchBar/>
		</nav>
	)
}

export default Nav
