import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import ModeToggler from "./components/ModeToggler";
import "./App.css";

function App() {
	return (
		<div>
			<ModeToggler />
			<Nav />
			<Promo />
			<Intro
				head="I've become a React developer!"
				para="I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!"
			/>
			<Intro
				head="Why I love front-end web development"
				para="In this blog post, I'll list 10 reasons why I love to work as a front-end developer."
			/>
			<Intro
				head="What's the best way to style your React apps?"
				para="There are so many options to choose from. Here's a high-level overview of the popular ones."
			/>
			<Footer />
		</div>
	);
}

export default App;
