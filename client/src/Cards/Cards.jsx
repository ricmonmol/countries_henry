import {useSelector} from "react-redux"
import Card from "../Card/Card"

function Cards(){
	const countries = useSelector((state) => state.countries)

	return(
		<div>
			{countries.map((c, i)=>{
				return(
			<Card 
				key={i++}
				id={c.id}
				img={c.image}
				name={c.name}
				continent={c.continent}
				/>
				)})}
			{console.log(countries)}
		</div>	
	)
		
}

export default Cards
