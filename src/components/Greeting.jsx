import React from "react";
import styled from "styled-components";

const Text = styled.p`
	color: var(--c-primary);
	font-size: 1.8rem;
	font-weight: 500;
	align-self: center;
`;

const Greeting = ({ username }) => {
	return <Text>Welcome, {username}</Text>;
};

export default Greeting;
