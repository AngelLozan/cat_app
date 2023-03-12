import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

	const nextPage = () => {
		if (currentPage !== nPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<nav>
			<ul className="pagination justify-content-center">
				<li className="page-item">
					<a  className="page-link" 
						href="#" onClick={previousPage}>
						Previous
					</a>
				</li>
				{pageNumbers.map((pageN) => (
					<li key={pageN}>
						<a onClick={() => setCurrentPage(pageN)} href="#" className="page-link">
							{pageN}
						</a>
					</li>
				))}
				<li className="page-item">
					<a href="#" onClick={nextPage} className="page-link">
						Next
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;