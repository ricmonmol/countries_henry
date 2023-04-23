import { Link } from "react-router-dom"

function Card(props){
	
	return(<div>
		<img src={props.img} alt={props.name}/>
		<h2>{props.name}</h2>
		<p>Continent: {props.continent}</p>
		<Link to={`/countries/${props.id}`}>Details</Link>
	</div>
	)
}

export default Card 
