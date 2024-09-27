import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 2.4rem 0;
`;

const Navbar = ({ children }) => {
	return <Nav>{children}</Nav>;
};

export default Navbar;
