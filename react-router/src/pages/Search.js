import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
	const [searchParams] = useSearchParams();

	const url = "http://localhost:3001/products?" + searchParams;

	const { data: items, loading, error } = useFetch(url);

	return (
		<div>
			<h2>Resultados disponíveis</h2>
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

export default Search;
