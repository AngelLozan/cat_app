import React from 'react';
import '../App.css';
import Card from './card.jsx';


const Mapped = ({catArray}) => {
	const sortCats = catArray.map(cat => <Card key={cat.id} cat={cat}/>);
	return(
		<div className="cats">
		{sortCats}
		</div>
		);

}

export default Mapped;