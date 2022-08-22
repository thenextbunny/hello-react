import { Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import "./Home.css";

const Home = () => {
	// 3 - Loading de dados com hook customizado
	const url = "http://localhost:3001/products";

	const { data: items, loading, error } = useFetch(url);

	return (
		<div>
			{loading && <p>Carregando</p>}
			{error && <p>{error}</p>}
			<ul className="products">
				{items &&
					items.map((item) => (
						<li key={item.id}>
							<h2>{item.name}</h2>
							<p>R${item.price}</p>
							{/* 4 - Rota dinâmica */}
							<Link to={`/products/${item.id}`}>Veja mais</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Home;
