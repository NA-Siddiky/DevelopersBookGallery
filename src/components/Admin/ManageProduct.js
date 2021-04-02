import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Book from './Book';

function ManageProduct() {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		axios.get(`https://banana-surprise-70079.herokuapp.com/books`).then((response) => {
			setBooks(response.data);
		});
	}, []);
	const deleteBook = (id) => {
		axios.delete(`https://banana-surprise-70079.herokuapp.com/deletebook/${id}`).then((res) => {
			console.log(res);
		});
	};
	return (
		<div className="d-flex flex-wrap">
			{books.map((book) => (
				<Book book={book} deleteBook={deleteBook} />
			))}
		</div>
	);
}

export default ManageProduct;
