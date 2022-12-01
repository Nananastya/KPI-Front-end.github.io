import "./App.css";
import Content from "./components/task1/Content";
import Header from "./components/task1/Header";
import Image from "./components/task1/Image";
import CardInfo from "./components/task2/CardInfo";
import CardsData from "./components/task2/CardsData";
function App() {
	return (
		<>
			<Header />
			<Content />
			<Image />
			<div className="cards">
				<CardInfo details={CardsData} />
			</div>
		</>
	);
}
export default App;
