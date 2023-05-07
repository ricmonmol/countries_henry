import style from './CreateActivityForm.module.css'
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { addActivity } from "../Redux/actions"
import { useEffect, useState } from 'react'
import validate from './validate.js'

function CreateActivityForm() {

	const countries = useSelector(state => state.countries)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [input, setInput] = useState({
		name: '',
		difficulty:'',
		duration:'',
		season:'',
		countryId:''
	})
	const [errors, setErrors] = useState({
		/*	name: '',
		dificultad:'',
		duracion:'',
		season:'',
		countryId:''*/
	}) 

	useEffect(() => {
		setErrors(validate(input))
	}, [input])

	function handleSubmit(e){
		e.preventDefault()
		if (Object.keys(errors).length === 0){
		const activity = {
			name: e.target.nombre.value,
			difficulty: e.target.dificultad.value,
			duration: e.target.duracion.value,
			season: e.target.season.value,
			countryId: e.target.countries.value 
		}
		alert('Actividad Agregada')
		navigate('/home')
		dispatch(addActivity(activity))
		} else {
			alert('Hay errores en el formulario')
		}
	}

	function handleChange(e){
		e.preventDefault()
		const { name, value } = e.target
		setInput({
			...input,
		[name]: value,
		})
		setErrors(validate({
			...input,
			[name]: value
		}))
	}
	
	return(
		<form className={style.activityForm} onSubmit={handleSubmit}>
			<div className={style.labels} >
				<label>Nombre: </label>
				<input name="nombre" onChange={handleChange}/>
			{errors.nombre && <p className={style.error}>{errors.nombre}</p>}

				<label>Dificultad: </label>
				<select name="dificultad" onChange={handleChange}>
					<option disabled selected value>Elegir una opción</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
			{errors.dificultad && <p className={style.error}>{errors.dificultad}</p>}
		
				<label>Duración: </label>
				<input name="duracion" onChange={handleChange}/>
			{errors.duracion && <p className={style.error}>{errors.duracion}</p>}
				
				<label>Temporada: </label>
				<select name='season' onChange={handleChange}>
					<option disabled selected value>Elegir una opción</option>
					<option name='Verano'>Verano</option>
					<option name='Otoño'>Otoño</option>
					<option name='Invierno'>Invierno</option>
					<option name='Primavera'>Primavera</option>
				</select>
			{errors.season && <p className={style.error}>{errors.season}</p>}
		
					<label>Pais: </label>
					<select name='countries' onChange={handleChange}>
						<option disabled selected value> Elegir una opcion</option>	
				{countries.sort((a, b) => a.name.localeCompare(b.name)).map(c => (
						<option key={c.id} value={c.id}>{c.name}</option>	
				))}
					</select>
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
