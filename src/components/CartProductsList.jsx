import React, {useEffect, useState} from 'react';
import '../css/CartProductsList.css'
import {nanoid} from "nanoid";
import CartProduct from "./CartProduct.jsx";

const CartProductsList = () => {
	const [totalPrice, setTotalPrice] = useState(0)
	const onAddProduct = (price) => {
		setTotalPrice(totalPrice => totalPrice + price)
		console.log(totalPrice)
	}
	const onDeleteProduct = (price) => {
		setTotalPrice(totalPrice => totalPrice - price)
	}
	return (
		<div className="main__container">
			<div className="cart__container">
				<p className="products__title">Корзина</p>
				<div className="cartProducts__container">
					{
						Object.keys(sessionStorage).map((e) => {
							let currentProduct = JSON.parse(sessionStorage.getItem(e))
							return (
								<CartProduct
									key={nanoid()}
									img={currentProduct[0]}
									title={currentProduct[1]}
									price={currentProduct[2]}
									onAddProduct={onAddProduct}
									onDeleteProduct={onDeleteProduct}
								/>
							)
						})
					}
				</div>
			</div>

			<div className="order__container">
				<div className="order__price">
					<span>ИТОГО</span>
					<span className="product__finalPrice">
						{totalPrice}
					</span>
				</div>
				<div className="order__button">
					Перейти к оформлению
				</div>
			</div>
		</div>

	);
};

export default CartProductsList;