import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import { filter, orderName, orderPopulation, resetFilter } from "../Redux/actions"
import style from './Nav.module.css'

function Nav(){
	const dispatch = useDispatch()
	const activities = useSelector(state => state.activities)
	const [selectedContinent, setSelectedContinent] = useState('')

	function handleDispatch(e){
		if(e.target.name === 'Nombre'){
			if(e.target.value === 'Ascendente'){
				dispatch(orderName(e.target.value))
			}
			if(e.target.value === 'Descendente'){
				dispatch(orderName(e.target.value))
			}
		}

		if(e.target.name === 'Poblacion'){
			if(e.target.value === 'Ascendente'){
				dispatch(orderPopulation(e.target.value))
			}
			if(e.target.value === 'Descendente'){
				dispatch(orderPopulation(e.target.value))
			}
		}
	}

	function handleFilter(e){
		const filterValue = e.target.value
		if(e.target.name === 'Continente' ){
			setSelectedContinent(filterValue)
			dispatch(filter({filterType: 'Continente', filterValue}))
		}
		if(e.target.name === 'Actividad'){
			setSelectedContinent(filterValue)
			dispatch(filter({filterType: 'Actividad', filterValue}))
		}
	}

	function handleRemoveFilter(){
		setSelectedContinent('')
		dispatch(resetFilter())
	}

	return(
		<div className={style.divNav}>
			<p>Ordenar por nombre: </p>
			<select onClick={handleDispatch} name='Nombre'>
				<option disabled selected value>Elegir una opción</option>
				<option value='Ascendente'>Ascendente</option>
				<option value='Descendente'>Descendente</option>
			</select>
			<p>Ordenar por Población: </p>
			<select onClick={handleDispatch} name='Poblacion'>
				<option disabled selected value>Elegir una opción</option>
				<option value='Ascendente'>Ascendente</option>
				<option value='Descendente'>Descendente</option>
			</select>
			<p>Filtrar por Continente: </p>
			<select onChange={handleFilter} name='Continente'>
				<option disabled selected={selectedContinent === ''} value>Elegir una opción</option>
				<option selected={selectedContinent === 'Africa'} value='Africa'>Africa</option>
				<option selected={selectedContinent === 'Asia'} value='Asia'>Asia</option>
				<option selected={selectedContinent === 'Europa'} value='Europe'>Europa</option>
				<option selected={selectedContinent === 'North America'} value='North America'>Norte America</option>
				<option selected={selectedContinent === 'Oceania'} value='Oceania'>Oceania</option>
				<option selected={selectedContinent === 'South America'} value='South America'>Sud America</option>
			</select>
			<p>Filtrar por Actividad: </p>
			<select onChange={handleFilter} name='Actividad'>
				<option disabled selected={selectedContinent === ''} value>Elegir una opción</option>
				{activities.map((a, i) => (
					<option key={i++} selected={selectedContinent === `${a.name}`} value={a.name}>{a.name}</option>
				))}
			</select>
			<input type='button' onClick={handleRemoveFilter} value='Limpiar Filtros' />
		</div>
	)
}

export default Nav
