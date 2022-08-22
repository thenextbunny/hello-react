import { useState, useEffect } from "react";

// 4 - Hook customizado que ajuda na reutilização de funções
export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [config, setConfig] = useState(null);
	const [method, setMethod] = useState(null);
	const [callFetch, setCallFetch] = useState(false);

	// 6 - Loading (tempo de espera entre requisições)
	const [loading, setLoading] = useState(false);

	// 8 - Tratando erros
	const [error, setError] = useState(null);

	// 9 - Criando DELETE
	const [productId, setProductId] = useState(null);

	const httpConfig = (data, method) => {
		if (method === "POST") {
			setConfig({
				method,
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			setMethod("POST");
		} else if (method === "DELETE") {
			setConfig({
				method,
				headers: {
					"Content-Type": "application/json",
				},
			});
			setMethod("DELETE");
			setProductId(data);
		}
	};

	useEffect(() => {
		// Hook customizado para recuperar dados (GET)
		const fetchData = async () => {
			// 6 - Loading
			setLoading(true);

			try {
				const request = await fetch(url);
				const json = await request.json();

				setData(json);
				setMethod(null);
				setError(null);
			} catch (error) {
				console.log(error.message);
				setError("Houve algum erro ao carregar dados.");
			}

			setLoading(false);
		};
		fetchData();
	}, [url, callFetch]);

	// Hook customizado para adicionar dados (POST)
	useEffect(() => {
		const httpRequest = async () => {
			if (method === "POST") {
				let fetchOptions = [url, config];

				const request = await fetch(...fetchOptions);
				const json = await request.json();

				setCallFetch(json);
			} else if (method === "DELETE") {
				const deleteUrl = `${url}/${productId}`;

				const request = await fetch(deleteUrl, config);

				const json = await request.json();

				setCallFetch(json);
			}
		};
		httpRequest();
	}, [config, method, url, productId]);

	return { data, httpConfig, loading, error };
};
