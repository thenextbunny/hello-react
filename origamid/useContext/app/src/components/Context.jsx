import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Context = () => {
	const { data, search, loading, clear } = useContext(GlobalContext);

	return (
		<>
			<div>
				<button onClick={search}>Fetch data</button> <button onClick={clear}>Clear data</button>
			</div>
			{loading ? (
				<p>Loading...</p>
			) : data ? (
				<p>
					The data is:{" "}
					{data
						.map((item) => (
							// Add a , between each item in the array, but not after the last item in the array.
							<span key={item.id}>{item.nome}</span>
						))
						.reduce((prev, curr) => [prev, ", ", curr])}
				</p>
			) : (
				// <span key={genres.id}>{genres.name}</span>).reduce((prev, curr) => [prev, ", ", curr])}
				<p>Click the button to fetch data</p>
			)}
		</>
	);
};

export default Context;
