import React from "react";
import styled from "styled-components";

const CountBox = styled.div`
	color: var(--c-primary);
`;

const Span = styled.span`
	background-color: var(--c-white);
	display: inline-flex;
	width: 4.8rem;
	height: 4.8rem;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	border: 2px solid var(--c-primary-2);
	font-weight: 700;
	margin-right: 0.2rem;
`;

const CountGoal = ({ doneGoals, allGoals }) => {
	return (
		<CountBox>
			<Span>{doneGoals}</Span> of {allGoals}
		</CountBox>
	);
};

export default CountGoal;
