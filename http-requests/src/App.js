import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

import "./App.css";

const url = "http://localhost:3001/products";

function App() {
	//const [products, setProducts] = useState([]);

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	// 1 - Resgatando dados da API sem custom hook
	/*useEffect(() => {
		async function fetchData() {
			const response = await fetch(url);
			const dataProducts = await response.json();
			setProducts(dataProducts);
		}
		fetchData();
	}, []);*/

	// 4 - Hook customizado para resgatar os dados
	const { data: productsList, httpConfig, loading, error } = useFetch(url);

	// 2 - Adicionando produtos com POST
	const handleSubmit = async (event) => {
		event.preventDefault();

		const product = {
			name,
			price,
		};
		/*
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		});

		// 3 - Carregamento de dados dinâmico
		const addedProdut = await response.json(); // Transformando JSON em objeto JavaScript
		setProducts((prevProducts) => [...prevProducts, addedProdut]);*/

		// Refatorando hook
		httpConfig(product, "POST");

		// Limpando inputs após adição
		setName("");
		setPrice("");
	};

	// 8 - Excluindo dados
	const handleRemove = (id) => {
		httpConfig(id, "DELETE");
	};

	return (
		<div className="App">
			<h1>Lista de produtos</h1>

			<div className="list-products">
				{loading && <p>Carregando dados. Por favor, espere!</p>}
				{error && <p>{error}</p>}
				<ul>
					{productsList &&
						productsList.map((product) => (
							<li key={product.id}>
								{product.name} com preço de R${product.price} -{" "}
								<button
									onClick={() => {
										handleRemove(product.id);
									}}
								>
									Excluir
								</button>
							</li>
						))}
				</ul>
			</div>
			<div className="add-product">
				<form onSubmit={handleSubmit}>
					<label>
						Nome do produto:
						<input
							type="text"
							name="name"
							id="name"
							value={name}
							required
							onChange={(event) => {
								setName(event.target.value);
							}}
						/>
					</label>
					<label>
						Preço:
						<input
							type="number"
							name="price"
							id="price"
							value={price}
							required
							onChange={(event) => {
								setPrice(event.target.value);
							}}
						/>
					</label>
					{/* 7 - State de loading no POST que evita envios duplicados, neste caso remove o botão enquanto o loading ocorrer */}
					{!loading ? (
						<button type="submit">Cadastrar</button>
					) : (
						<button type="submit" disabled>
							Aguarde
						</button>
					)}
				</form>
			</div>
		</div>
	);
}

export default App;
