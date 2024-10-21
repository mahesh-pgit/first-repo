function Intro(props) {
	return (
		<div className="blog-post-intro">
			<h2>{props.head}</h2>
			<div>
				<p>{props.para}</p>
				<p className="link">Read more...</p>
			</div>
		</div>
	);
}

export default Intro;
