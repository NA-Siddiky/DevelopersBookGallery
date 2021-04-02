import { Button } from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';

function OrderData(props) {
	const {
		author,
		bookName,
		date,
		email,
		price,
		quantity,
		imgUrl,
	} = props.order;
	console.log(props.order);
	return (
		<>
			<tr>
				<td>{date}</td>
				<td>{bookName}</td>
				<td>{author}</td>
				<td>{quantity}</td>
				<td>{email}</td>
				<td>{price}</td>
				<td><Button variant="success">Confirm</Button></td>
				{props.children}
			</tr>

		</>

	);
}

export default OrderData;