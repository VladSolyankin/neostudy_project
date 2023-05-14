import React, {useContext} from 'react';
import '../css/Product.css'
import {AddToCartContext} from "../pages/Catalog.jsx";
import {AddNotificationCounter} from "../App.jsx";

const Product = ({...props}) => {
	const addToCartContext = useContext(AddToCartContext)
	const notificationContext = useContext(AddNotificationCounter)
	return (
		<div className="product__container">
			<img className="product__image" src={props.img} alt="Headphones image"/>
			<div className="product__info">
				<span>{props.title}</span>
				<span className="product__price">{props.price} </span>
			</div>
			<div className="product__buy">
				<div className="product__rating">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
						<path d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z" fill="#FFCE7F"/>
					</svg>
					<span>{props.rate}</span>
				</div>
				<span>
					<a  className="product__link"
						onClick={() => {
							addToCartContext(props.img, props.title, props.price)
							notificationContext.addNotificationCounter()
						}}>Купить</a>
				</span>
			</div>
		</div>
	);
};

export default Product;