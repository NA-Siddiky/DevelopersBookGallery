import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Spinner from '../Spinner/Spinner';

const Home = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch('https://banana-surprise-70079.herokuapp.com/books')
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	return (
		<div className="row">
			{books.length === 0 && <Spinner />}
			{books.map((book) => (
				<Book book={book}></Book>
			))}
		</div>
	);
};

export default Home;
