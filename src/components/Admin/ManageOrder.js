import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import OrderData from '../Orders/OrderData';

function ManageOrder() {
	const [orders, setOrder] = useState([]);
	useEffect(() => {
		axios.get(`https://banana-surprise-70079.herokuapp.com/getorder`).then((response) => {
			setOrder(response.data);
		});
	}, []);
	const deleteOrder = (id) => {
		axios.delete(`https://banana-surprise-70079.herokuapp.com/deleteorder/${id}`).then((res) => {
			toast.warning('Deleted Successfully');
		});
	};
	return (
		<div>
			{orders.map((order, index) => (
				<OrderData key={index} order={order}>
					<button
						className="btn-danger btn"
						onClick={() => deleteOrder(order._id)}
					>
						Delete
					</button>
				</OrderData>
			))}
		</div>
	);
}

export default ManageOrder;
