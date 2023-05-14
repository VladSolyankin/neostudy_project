import React, {useState} from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CartProductsList from "../components/CartProductsList.jsx";
import '../css/Cart.css'

const Cart = () => {

	return (
		<div className="cart__container">
			<Header />
			<CartProductsList />
			<Footer />
		</div>
	);
};

export default Cart;