// 2 - Links com react-router

import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			{/* Modo padrão
				<Link to="/">Home</Link>
				<Link to="/about">About</Link> 
			*/}
			<NavLink to="/">Home</NavLink> {/* Por padrão o NavLink possui a class .active */}
			<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "not-active")}>
				About
			</NavLink>
		</nav>
	);
};

export default Navbar;
