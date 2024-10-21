import { useState } from "react";

function ModeToggler() {
	const [mode, setMode] = useState("light");
	const darkMode = <span>Dark Mode</span>;
	const lightMode = <span>Light Mode</span>;

	function handleClick() {
		mode == "light" ? setMode("dark") : setMode("light");
	}

	return (
		<div>
			<h1>{mode == "dark" ? darkMode : lightMode} is On.</h1>
			<button onClick={handleClick}>Change Mode</button>
		</div>
	);
}

export default ModeToggler;
