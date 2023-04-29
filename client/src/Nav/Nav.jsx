import {useDispatch} from "react-redux"
import { filter, orderName, orderPopulation } from "../Redux/actions"

function Nav(){
	const dispatch = useDispatch()

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
				console.log(e.target.value)
	}

	function handleFilter(e){
		const filterValue = e.target.value
		dispatch(filter({filterType: 'Continente', filterValue}))
	}

	return(
		<div>
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
				<option disabled selected value>Elegir una opción</option>
				{/*<option value='todos'>Todos</option>*/}
				<option value='Africa'>Africa</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europa</option>
				<option value='North America'>Norte America</option>
				<option value='Oceania'>Oceania</option>
				<option value='South America'>Sud America</option>
			</select>
		</div>
	)
}

export default Nav
