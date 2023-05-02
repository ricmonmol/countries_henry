import {useSelector} from "react-redux";
import Card from "../Card/Card"
import style from './Cards.module.css'

function Cards({ countries }){

  	const country = useSelector((state) => state.countries);
	const countriesRender = countries.length > 0 ? countries : country;
	return(
		<div className={style.divCards}>
			{countriesRender.map((c, i)=>{
				return(
			<Card 
				key={i++}
				id={c.id}
				img={c.image}
				name={c.name}
				continent={c.continent}
				/>
				)})}
		</div>	
	)
		
}

export default Cards
