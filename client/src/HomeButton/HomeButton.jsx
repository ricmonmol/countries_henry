import style from './HomeButton.module.css'
import { useNavigate } from 'react-router-dom'

function HomeButton(){
	const navigate = useNavigate()

	function handleHomeClick() {
		navigate('/home')
	}
	return(
		<button className={style.btnStart}  onClick={handleHomeClick}>
			START
		</button>
	)
}

export default HomeButton
