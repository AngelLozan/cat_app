import React from 'react';
import '../App.css';

const Card = ({cat}) => {

	return (
		<div>
		<img  className="cat" src={cat.url} alt={cat.id} />
		<br/>
		<h2>{cat.url}</h2>
		<p>{cat.id}</p>
		</div>
		)
}

export default Card;