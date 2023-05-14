import React, {createContext, useEffect, useState} from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductsList from "../components/ProductsList.jsx";
import {products} from "../data/data.js";
import '../css/Catalog.css'
import {nanoid} from "nanoid";

export const AddToCartContext = createContext()

const Catalog = () => {
	const addToCart = (img, title, price) => {
		let key = nanoid()
		sessionStorage.setItem(`${key}`, JSON.stringify([img, title, price]))
	}
	return (
		<AddToCartContext.Provider value={addToCart}>
			<div className="catalog__container">
				<Header />
				<ProductsList sectionName="Наушники" productsData={products.headphones} />
				<ProductsList sectionName="Беспроводные наушники" productsData={products.wirelessHeadphones }/>
				<Footer />
			</div>
		</AddToCartContext.Provider>

	);
};

export default Catalog;