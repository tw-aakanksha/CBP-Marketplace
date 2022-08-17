import MEN_DATA from "../../Products.json";
import "./data.css";
import Product from "../Product/product-card";
import { useParams } from "react-router-dom";
const Mendata = ({ data }) => {
	console.log(data);

	return (
		<div className="data">
			{MEN_DATA.filter((product) => product.Category == "men").map(
				(product) => (
					<Product key={product.id} product={product} />
				)
			)}
		</div>
	);
};

export default Mendata;
