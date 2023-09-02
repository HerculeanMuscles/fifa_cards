import PlayerList from "./components/PlayerList";
import "./App.css";

function App() {
	document.title = "Fifa Card";
	return (
		<>
			<div className="App">
				<h1 className="text-center">Player List</h1>
				<PlayerList /> {/* Render the PlayerList component */}
			</div>
		</>
	);
}

export default App;
