import React from 'react';
import Product from "./Product.jsx";
import '../css/ProductsList.css'

const ProductsList = ({sectionName, productsData}) => {
	return (
		<>
			<p className="products__title">{sectionName}</p>
			<div className="products__container">
				{
					...productsData.map(({id, title, img, price, rate}) => (
						<Product
							key={id}
							id={id}
							title={title}
							img={img}
							price={price}
							rate={rate}
						/>
					))
				}
			</div>
		</>
	);
};

export default ProductsList;