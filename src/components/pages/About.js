import React, { Component } from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import PageHeader from "../molecules/PageHeader";

import PageWrap from "../templates/PageWrap";

export class aboutPage extends Component {
	render() {
		return (
			<PageWrap page="about">
				<StyledAbout>
					<PageHeader titleBg="who am i">
						About <span className="point">Me</span>
					</PageHeader>

					<section>
						<Heading level="2">WHO AM I</Heading>
						
					</section>

					<section>
						<Heading level="2">WORK EXPERIENCE</Heading>

					</section>

					<section>
						<Heading level="2">EDUCATION</Heading>

					</section>

					<section>
						<Heading level="2">MY SKILLS</Heading>

					</section>

					<section>
						<Heading level="2">LANGUAGE</Heading>

					</section>
					
					<section>
						<Heading level="2">MILITARY SERVICE</Heading>

					</section>

				</StyledAbout>
			</PageWrap>
		);
	}
}

const StyledAbout = styled.main`
	section {
		max-width: 1140px;
		margin: auto;
		padding-bottom: 80px;
		&:not(:last-child) {
			position: relative;
			margin-bottom: 60px;
			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				width: 500px;
				height: 1px;
				background-color: #252525;
			}
		}
		> h2 {
			margin-bottom: 40px;
			font-size: 26px;
			font-weight: 600;
			text-align: center;
		}
	}
	@media ${(props) => props.theme.mobile} {
		section {
			padding-bottom: 40px;
			&:not(:last-child) {
				&::after {
					width: 70%;
				}
			}
		}
	}
`;
export default aboutPage;