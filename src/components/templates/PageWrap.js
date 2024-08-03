import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

function PageWrap(props) {
	const { children } = props;

	return (
		<div>
			<Header page={props.page} />
            <>{children}</>
            <Footer />
		</div>
	);
}

export default PageWrap;