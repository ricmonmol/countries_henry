import style from './Pangination.module.css'
import React from 'react'
import { useDispatch } from 'react-redux';
import { paginate } from '../Redux/actions';

function Pagination({ countries, couPerPage }){
    const pageNumber = [];
	const dispatch = useDispatch()

	for (let i = 1; i <= Math.ceil(countries / couPerPage); i++) {
		pageNumber.push(i);
	}
    return (
        <div>
			<ul className={style.ulPage}>
				{pageNumber &&
					pageNumber.map((n) => (
						<li className={style.liPage} key={n}>
							<span onClick={() => dispatch(paginate(n))}>{n}</span>
							</li>
						))}
				</ul>
			</div>
  )
}

export default Pagination;
