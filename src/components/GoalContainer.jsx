import React from "react";
import styled from "styled-components";

const Viewbox = styled.div`
	padding: 2rem 10vw;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const GoalContainer = ({ children }) => {
	return <Viewbox>{children}</Viewbox>;
};

export default GoalContainer;
