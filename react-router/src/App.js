import "./App.css";

// 1 - Configurante React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
	return (
		<div className="App">
			<h1>React Router</h1> {/* Elementos são repetidos em todas as páginas */}
			<BrowserRouter>
				{/* Elementos que são repetidos em todas as páginas e possuem elementos do react-router devem ser inseridos entre BrowserRouter e Routes */}
				<Navbar /> {/* 2 - Links com react-router */}
				<SearchForm />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					{/* 4 - Rota dinâmica */}
					<Route path="/products/:id" element={<Product />} />
					{/* 6 - Nested route */}
					<Route path="/products/:id/info" element={<Info />} />
					{/* 9 - Search */}
					<Route path="/search" element={<Search />} />
					{/* 10 - Redirect de páginas antigas para atuais */}
					<Route path="/company" element={<Navigate to="/about" />} />
					{/* 4 - No match route (404)*/}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
