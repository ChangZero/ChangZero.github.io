import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

function PageWrap(props) {
	const { children } = props;

    return (
        <  div className="page-wrap">
			<Header page={props.page} />
			<div className="content">
				{children}
			</div>
			<Footer />
		</div>
	);
}

export default PageWrap;

