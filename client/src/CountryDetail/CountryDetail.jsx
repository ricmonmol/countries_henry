import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getCountryById } from "../Redux/actions"

function CountryDetail(){
	const { id } = useParams()
	const dispatch = useDispatch()
	const country = useSelector(state => state.countries.find(c=>c.id === id))

		useEffect(() => {
		dispatch(getCountryById(id))
	}, [dispatch, id])

	return(
		<div>
			<img src={country.image} alt={country.name}/>
			<h1>{country.name}</h1>
			<p>Capital: {country.capital}</p>
			<p>Continent: {country.continent}</p>
			<p>population: {country.population}</p>
			<Link to={'/home'}> BACK HOME</Link>
		</div>
	)
}

export default CountryDetail
