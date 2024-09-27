import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--c-primary-4);
	height: max-content;
	border-radius: 0 0 48px 48px;
	font-size: 2.4rem;
	padding: 0 10vw;
	margin-bottom: 3rem;
	& > h1 {
		padding: 4rem 0;
		margin-bottom: 1rem;
		font-size: 3.8rem;
		/* max-width: 10rem; */
		font-weight: 700;
		font-style: italic;
		color: var(--c-primary);
		text-shadow: 1px 1px 2px var(--c-primary-3);
	}
`;

const Header = ({ children }) => {
	return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
