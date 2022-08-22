// Hook que traz os parâmetros do elemento selecionado com o Link
import { useParams, Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Product = () => {
	// 4 - Rota dinâmica
	const { id } = useParams();

	// 5 - Carregamento de dado individual e dinâmico
	const url = "http://localhost:3001/products/" + id;

	const { data: product, loading, error } = useFetch(url);

	return (
		<>
			{error && <p>Ocorreu um erro.</p>}
			{loading && <p>Carregando</p>}
			{product && (
				<div>
					<h1>{product.name}</h1>
					<p>Preço: {product.price}</p>
					<p>ID do produto: {id}</p>
					{/* 6 - Nested routes */}
					<Link to={`/products/${product.id}/info`}>Mais informações</Link>
				</div>
			)}
		</>
	);
};

export default Product;
