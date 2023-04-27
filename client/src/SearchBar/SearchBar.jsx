import { useEffect, useState } from "react"

function SearchBar({ onSearch, setCountryFilter }){
	const [name, setName] = useState('')
	const formatName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

	function handleSubmit(e){
		e.preventDefault()
		onSearch(formatName)
	}

	useEffect(() => {
		setCountryFilter(formatName)
	},[setCountryFilter, formatName])

	return(
		<div>
			<form onSubmit={handleSubmit}>
			<input
			type='search' 
			placeholder="Enter name"
			name={name}
			onChange={e => setName(e.target.value)}
			/>
			</form>
		</div>
	)
}

export default SearchBar
