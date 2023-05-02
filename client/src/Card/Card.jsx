import { Link } from "react-router-dom"
import style from './Card.module.css'

function Card(props){
	
	return(
	<div className={style.divCard}>
		<img src={props.img} alt={props.name}/>
		<h2>{props.name}</h2>
		<p>Continent: {props.continent}</p>
		<Link to={`/countries/${props.id}`}>Details</Link>
	</div>
	)
}

export default Card 
