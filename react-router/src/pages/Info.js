import { useParams } from "react-router";

const Info = () => {
	const { id } = useParams();
	return (
		<div>
			<h1>Mais informações sobre o produto: {id}</h1>
		</div>
	);
};

export default Info;
