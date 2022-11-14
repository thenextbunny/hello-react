import { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		search();
	}, []);

	const clear = () => {
		setLoading(true);
		setData(null);
		setLoading(false);
	};

	const search = () => {
		setLoading(true);
		fetch("https://ranekapi.origamid.dev/json/api/produto/")
			.then((response) => response.json())
			.then((json) => setData(json));
		setLoading(false);
	};

	return <GlobalContext.Provider value={{ data, search, clear, loading }}>{children}</GlobalContext.Provider>;
};
