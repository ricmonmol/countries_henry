function Pagination({ currentPage, totalPage, changePage }){
	const pageNumber = []
	for (let i = 1; i < totalPage; i++) {
		pageNumber.push(i);
	}

	return(
		<div>
			<ul>
				<li><button onClick={() => changePage(currentPage - 1)}>Anterior</button></li>
				{pageNumber.map((p) =>(
					<li key={p}><button onClick={() => changePage(p)}>{p}</button></li>
				))}
				<li><button onClick={() => changePage(currentPage + 1)}>Siguiente</button></li>
			</ul>
		</div>
	)
}

export default Pagination 
