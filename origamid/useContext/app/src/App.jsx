import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { GlobalContext, GlobalProvider } from "./context/GlobalContext";
import { useContext, useEffect } from "react";
import Context from "./components/Context";

function App() {
	return (
		<GlobalProvider>
			<div className="App">
				<header>
					<div>
						<img src={reactLogo} className="logo react" alt="React logo" />
					</div>
					<h1>useContext</h1>
				</header>
				<main>
					<Context />
				</main>
			</div>
		</GlobalProvider>
	);
}

export default App;
