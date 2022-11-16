import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App = () => {
	const fields = [
		{
			name: "name",
			label: "Nome",
			type: "text",
		},
		{
			name: "email",
			label: "Email",
			type: "email",
		},
		{
			name: "password",
			label: "Senha",
			type: "password",
		},
		{
			name: "cep",
			label: "CEP",
			type: "text",
		},
		{
			name: "street",
			label: "Endereço",
			type: "text",
		},
		{
			name: "number",
			label: "Número",
			type: "text",
		},
		{
			name: "district",
			label: "Bairro",
			type: "text",
		},
		{
			name: "city",
			label: "Cidade",
			type: "text",
		},
		{
			name: "state",
			label: "Estado",
			type: "text",
		},
	];

	const [form, setForm] = useState(
		fields.reduce((acc, field) => {
			return {
				...acc,
				[field.name]: "",
			};
		})
	);

	const [response, setResponse] = useState(null);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		fetch("https://ranekapi.origamid.dev/json/api/usuario", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(form),
		}).then((response) => {
			setResponse(response);
		});
	};

	return (
		<div className="App">
			<div>
				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>
			<h1>Formulário</h1>
			<form onSubmit={handleSubmit}>
				{fields.map((field) => (
					<label key={field.name}>
						{field.label}
						<input type={field.type} id={field.name} name={field.name} value={form[field.name]} onChange={handleChange} />
					</label>
				))}

				{response && <p className={response.ok ? "success" : "error"}>{response.ok ? "Formulário enviado" : "Erro no envio"}</p>}
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};

export default App;
