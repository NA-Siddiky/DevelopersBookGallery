import { Button } from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';

function OrderData(props) {
	const {
		authorName,
		bookName,
		date,
		email,
		price,
		quantity,
		imgUrl,
	} = props.order;
	return (
		<div>
			<div className="container">
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Date</th>
							<th>Book Name</th>
							<th>Author Name</th>
							<th>Quantity</th>
							<th>User Email Address</th>
							<th>Price</th>
							<th>Confirm Order</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{date}</td>
							<td>{bookName}</td>
							<td>{authorName}</td>
							<td>{quantity}</td>
							<td>{email}</td>
							<td>{price}</td>
							<td><Button variant="success">Confirm</Button></td>
						</tr>
					</tbody>
				</Table>
				{props.children}
			</div>

			{/* <div className="border p-5 m-2">
				<img style={{ width: '70px', height: '70px' }} src={imgUrl} alt="" />
				<p>{authorName}</p>
				<p>{bookName}</p>
				<p>{date}</p>
				<p>{email}</p>
				<p>{price}</p>
				<p>{quantity}</p>
				{props.children}
			</div> */}

		</div>

	);
}

export default OrderData;