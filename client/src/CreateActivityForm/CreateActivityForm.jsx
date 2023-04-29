import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {addActivity} from "../Redux/actions"

function CreateActivityForm() {

	const countries = useSelector(state => state.countries)
	const dispatch = useDispatch()

	function handleSubmit(e){
		e.preventDefault()
		const activity = {
			name: e.target.nombre.value,
			difficulty: e.target.dificultad.value,
			duration: e.target.duracion.value,
			season: e.target.season.value,
			countryId: Array.from(e.target.countries).filter(c => c.checked).map(c => c.dataset.countryId).join()
		}
		console.log('Activity: ', activity)
		dispatch(addActivity(activity))
	}
	
	return(
		<form onSubmit={handleSubmit}>
			<label>Nombre: </label>
			<input name="nombre"/>
	
			<label>Dificultad: </label>
			<select name="dificultad">
				<option disabled selected value>Elegir una opción</option>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
			</select>
		
			<label>Duración: </label>
			<input name="duracion"></input>
		
			<label>Temporada: </label>
			<select name='season'>
				<option disabled selected value>Elegir una opción</option>
				<option name='Verano'>Verano</option>
				<option name='Otoño'>Otoño</option>
				<option name='Invierno'>Invierno</option>
				<option name='Primavera'>Primavera</option>
			</select>
		
			{countries.map(c => (
				<label key={c.id}>
					<input type='checkbox' value={c.name} data-country-id={c.id} name="countries"/>
			{c.name}</label>
			))}
		
			<button type="submit">Agregar</button>
			<Link to={'/home'}> BACK HOME</Link>
		</form>
	)
}

export default CreateActivityForm
