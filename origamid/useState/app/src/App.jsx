import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
	const [product, setProduct] = useState(null);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (product === null) return;

		setLoading(true);

		fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, [product]);

	return (
		<div className="App">
			<header>
				<div>
					<img src={reactLogo} className="logo react" alt="React logo" />
				</div>
				<h1>useState e useEffect na prática</h1>
				<h2>Escolha um produto!</h2>
			</header>

			<main>
				<div>
					<button onClick={() => setProduct("notebook")}>Notebook</button>
					<button onClick={() => setProduct("smartphone")}>Smartphone</button>
					<button onClick={() => setProduct("tablet")}>Tablet</button>
				</div>

				<div>
					{loading ? (
						<p>Carregando...</p>
					) : (
						data && (
							<>
								<h2>Informações sobre o {product}</h2>
								<p>Descrição: {data.descricao}</p>
								{data.fotos &&
									data.fotos.map((foto) => (
										<img
											key={foto.src}
											src={foto.src}
											alt={foto.titulo}
											style={{
												width: "200px",
											}}
										/>
									))}
							</>
						)
					)}
				</div>
			</main>
		</div>
	);
}

export default App;
