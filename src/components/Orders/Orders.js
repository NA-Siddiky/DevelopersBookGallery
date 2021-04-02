import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../Context/BookContext';
import OrderData from './OrderData';

const Orders = () => {
	const [orderData, setOrderData] = useState([]);
	const { user } = useContext(BookContext);
	useEffect(() => {
		const email = {
			email: user.email,
		};
		axios
			.post(`https://banana-surprise-70079.herokuapp.com/userorder`, email)
			.then((response) => setOrderData(response.data));
	}, [user]);
	return (
		<ul>
			{orderData.map((order) => (
				<OrderData order={order} />
			))}
		</ul>
	);
};

export default Orders;
