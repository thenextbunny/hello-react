import { useNavigate } from "react-router";
import { useState } from "react";

const SearchForm = () => {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		navigate("/search?q=" + query);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="query">Buscar</label>
			<input
				type="search"
				name="query"
				id="query"
				onChange={(event) => {
					setQuery(event.target.value);
				}}
				value={query}
			/>
		</form>
	);
};

export default SearchForm;
