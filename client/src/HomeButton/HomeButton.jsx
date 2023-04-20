import { useNavigate } from 'react-router-dom'

function HomeButton(){
	const navigate = useNavigate()

	function handleHomeClick() {
		navigate('/home')
	}
	return(
		<button onClick={handleHomeClick}>
			Start
		</button>
	)
}

export default HomeButton
