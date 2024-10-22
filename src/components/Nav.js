import { Link } from "react-router-dom";

function Nav() {
	const navStyles = {
		background: "indigo",
		padding: "10px",
		textAlign: "center",
		fontSize: "20px",
	};

	const linkStyles = {
		margin: "20px",
		fontSize: "20px",
		color: "white",
		textDecoration: "none",
	};
	return (
		<nav style={navStyles} className="main-nav">
			<Link style={linkStyles} to="/">
				Home
			</Link>
			<Link style={linkStyles} to="/change-mode">
				Change Mode
			</Link>
			<Link style={linkStyles} to="/promo">
				Promo
			</Link>
			<Link style={linkStyles} to="/intro">
				Introduction
			</Link>
			<Link style={linkStyles} to="/footer">
				Footer
			</Link>
		</nav>
	);
}

export default Nav;
