import style from './CreateActivityForm.module.css'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {addActivity} from "../Redux/actions"
import {useState} from 'react'

function CreateActivityForm() {

	const countries = useSelector(state => state.countries)
	const dispatch = useDispatch()
	const [errors, setErrors] = useState({}) 

	function handleSubmit(e){
		e.preventDefault()
		const errors = {};

		if(e.target.nombre.value === '') errors.nombre = "Name is required"
		else if(!e.target.dificultad.value) errors.dificultad = "Dificultad is requied"
		else if(e.target.duracion.value === '') errors.duracion = "Duracion is required"
		else if(!e.target.season.value) errors.season = "Season is requied"
		else if(!Array.from(e.target.countries).filter(c => c.checked).length) errors.countryId = "At least one country must be selected"

		if(Object.keys(errors).length > 0){
			setErrors(errors)
			console.log(errors)
		} else {
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
	}
	
	return(
		<form className={style.activityForm} onSubmit={handleSubmit}>
			<div className={style.labels} >
				<label>Nombre: </label>
				<input name="nombre"/>
			{errors.nombre && <p className={style.error}>{errors.nombre}</p>}

				<label>Dificultad: </label>
				<select name="dificultad">
					<option disabled selected value>Elegir una opción</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
			{errors.dificultad && <p className={style.error}>{errors.dificultad}</p>}
		
				<label>Duración: </label>
				<input name="duracion"></input>
			{errors.duracion && <p className={style.error}>{errors.duracion}</p>}
				
				<label>Temporada: </label>
				<select name='season'>
					<option disabled selected value>Elegir una opción</option>
					<option name='Verano'>Verano</option>
					<option name='Otoño'>Otoño</option>
					<option name='Invierno'>Invierno</option>
					<option name='Primavera'>Primavera</option>
				</select>
			</div>
			{errors.season && <p className={style.error}>{errors.season}</p>}
			
				<div className={style.divSelect}>		
				{countries.sort((a, b) => a.name.localeCompare(b.name)).map(c => (
				<label key={c.id}>
					<input type='checkbox' value={c.name} data-country-id={c.id} name="countries"/>
				{c.name}</label>
				))}
			{errors.countryId && <p className={style.error}>{errors.countryId}</p>}
			</div>
			
					<div className={style.btnsForm}>
				<Link className={style.bckBtn} to={'/home'}> BACK HOME</Link>
				<button className={style.addBtn}  type="submit">Agregar</button>
			</div>
		</form>
	)
}

export default CreateActivityForm
