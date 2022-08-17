import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PRODUCTS_DATA from "../../Products.json";
import Product from "../Product/product-card";

const Filterdata = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	console.log(state.search.length);

	return (
		<div className="data">
			{state.search.length <= 0
				? navigate("/")
				: PRODUCTS_DATA.filter((product) =>
						product.name.toLowerCase().includes(state.search.toLowerCase())
				  ).map((product) => <Product key={product.id} product={product} />)}
		</div>
	);
};

export default Filterdata;
