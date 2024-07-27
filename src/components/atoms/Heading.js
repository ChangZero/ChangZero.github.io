const Heading = (props) => {
	const level = parseInt(props.level, 10); // 문자열을 숫자로 변환

	switch (level) {
		case 2:
			return <h2 {...props}>{props.children}</h2>;
		case 3:
			return <h3 {...props}>{props.children}</h3>;
		case 4:
			return <h4 {...props}>{props.children}</h4>;
		case 1:
		default:
			return <h1 {...props}>{props.children}</h1>;
	}
};

export default Heading;

