import { useState } from "react"
import { useDispatch } from "react-redux"
import { getCountryByName } from "../Redux/actions"

function SearchBar(){
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const formatName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

	function handleSubmit(e){
		e.preventDefault()
		dispatch(getCountryByName(formatName))
		console.log(formatName)
	}

	return(
		<div>
			<form onSubmit={handleSubmit}>
			<input
			type='search' 
			placeholder="Enter name"
			name={name}
			onChange={e => setName(e.target.value)}
			/>
			<button type='submit'>Buscar</button>
			</form>
		</div>
	)
}

export default SearchBar
