import React, { useState, useEffect } from 'react';
import Scroll from './scroll.jsx';
import Mapped from './mapit.jsx';
import Pagination from './Pagination.jsx';
import '../App.css'




const Catz = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	//const [pic, setPic]= useState();
	const [catArray, setCatArray] = useState([]);
	const [changeCat, setChangeCat] = useState(null);
	const [search, setSearch] = useState('');
	let err;

	 const [currentPage, setCurrentPage] = useState(1);
	 const [recordsPerPage] = useState(10);

	 const indexLastRecord = currentPage * recordsPerPage;
	 const indexFirstRecord = indexLastRecord - recordsPerPage;
	 const currentRecords = catArray.slice(indexFirstRecord, indexLastRecord);
	 const nPages = Math.ceil(catArray.length/recordsPerPage);


	const getPic = async () => {
		try {
			let res = await fetch('https://api.thecatapi.com/v1/images/search');
			let data = await res.json();
			let cat = await data[0]
			// let img = await cat.url;
			await setIsLoaded(true);
			// await setPic(img);
			await setCatArray(catArray => [...catArray, cat])
			console.log("fetched a cat!")

		} catch(err) {
			console.log(err);
			setIsLoaded(true);
			setError(err);
		}
	}

	const sortCatsArray = currentRecords.filter(
		cat => {
			return(
				cat
				.id
				.toLowerCase()
				.includes(search.toLowerCase()) ||
				cat
				.url
				.toLowerCase()
				.includes(search.toLowerCase())
				)
		}

		)

	const handleChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	}

	

	const loadCat = async () =>{
		await getPic();
		if(!changeCat){
			await setChangeCat(setInterval(getPic, 5000));
		}

	}

	const stopLoad = async () => {
		await clearInterval(changeCat)
		await setChangeCat(null);
		console.log("Meowzers")
	}

//<img className="cat" src={pic} />
	// {catArray.map((image, index) => (
	// 		<img className="cat" key={index} src={catArray[index % catArray.length]} alt="cat pic"/>

	// 		))}

	useEffect(() => {
		getPic();
	}, []);

	if(err){
		return <div> An error occured: {err.message} </div>;
	} else if(!isLoaded){
		return <div>Loading...</div>;
	} else {

	return (
		<>	

		<br/>
		<input
		className="search"
		onChange={handleChange}
		type='search'
		placeholder='search cat url'
		 />

		 <br/>
		 <br/>

		 <button className="more" onClick={loadCat}>
		Get another cat
		</button>

		<button className="more" onClick={stopLoad}>
		Stop Cats
		</button>
		<br/>

		<Pagination 
			nPages = {nPages}
			currentPage = {currentPage}
			setCurrentPage = {setCurrentPage}
		/>

		<Scroll>
		 	<Mapped catArray={sortCatsArray} />
		</Scroll>
		
	
		
		</>

		);
	}
}

export default Catz;