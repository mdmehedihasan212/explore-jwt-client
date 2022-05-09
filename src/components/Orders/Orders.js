import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [])

    return (
        <div>
            <h1>Orders: {orders.length}</h1>
        </div>
    );
};

export default Orders;