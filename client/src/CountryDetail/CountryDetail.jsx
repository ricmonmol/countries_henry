import style from './CountryDetail.module.css'
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
		<div className={style.divDetail}>
			<div className={style.divContent}>
					<img src={country.image} alt={country.name}/>
				<div className={style.detailText}>
					<h2>{country.name}</h2>
					<p>Capital: {country.capital}</p>
					<p>Continent: {country.continent}</p>
					<p>Subregion: {country.subregion}</p>
					<p>Area: {country.area.toLocaleString()} m2</p>
					<p>Population: {country.population.toLocaleString()} people.</p>
				</div>
			</div>
				<Link className={style.detailBtn}  to={'/home'}> BACK HOME</Link>
		</div>
	)
}

export default CountryDetail
