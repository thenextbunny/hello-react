import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
	const [product, setProduct] = useState(null);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const localProduct = window.localStorage.getItem("product");

		localProduct && setProduct(localProduct);
	}, []);

	useEffect(() => {
		product &&
			fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
				.then((response) => response.json())
				.then((json) => {
					setData(json);
					setLoading(false);
				});
	}, [product]);

	return (
		<div className="App">
			<header>
				<div>
					<img src={reactLogo} className="logo react" alt="React logo" />
				</div>
				<h1>Produto preferido</h1>
			</header>
			<main>
				<div>{product ? <p>Seu produto preferido é: {product}</p> : <p>Você não tem um produto preferido!</p>}</div>
				<div>
					<button onClick={() => setProduct("notebook")}>Notebook</button>
					<button onClick={() => setProduct("smartphone")}>Smartphone</button>
				</div>
				<div>
					{loading ? (
						<p>Carregando...</p>
					) : (
						product && (
							<>
								<h2>Informações sobre o {product}</h2>
								<p>Descrição: {data.descricao}</p>
								<p>Preço: {data.preco}</p>
							</>
						)
					)}
				</div>
			</main>
		</div>
	);
}

export default App;
