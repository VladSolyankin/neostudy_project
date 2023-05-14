import React, {useEffect, useState} from 'react';
import '../css/CartProduct.css'

const CartProduct = ({onDeleteProduct, onAddProduct, ...props}) => {
	const [counter, setCounter] = useState(0)
	return (
		<div className="product__container">
			<img className="product__image" src={props.img} alt="Headphones image"/>
			<div className="product__info">
				<span>{props.title}</span>
				<span className="product__price">{props.price} </span>
			</div>
			<div className="product__amount">
				<div className="product__amount-change">
					<button onClick={() => {
						counter ? setCounter(counter => counter - 1) : 0
						console.log(counter)
					}}>-</button>
					<span>{counter}</span>
					<button onClick={() => {
						setCounter(counter => counter + 1)
					}}>+</button>
				</div>
				<span
					className="product__finalPrice">
					{props.price * counter}
				</span>
			</div>

		</div>
	);
};

export default CartProduct;