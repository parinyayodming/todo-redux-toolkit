import React from "react";
import styled from "styled-components";
import { clickAnimation } from "../styles/animate";

const Container = styled.div`
	display: flex;
	align-items: center;
	border: 2px solid var(--c-primary-3);
	border-radius: 32px;
	padding: 1.2rem 2rem;
	background-color: ${(props) =>
		props.$isdone ? "var(--c-primary-2)" : "var(--c-primary-4)"};
	box-shadow: var(--c-primary-3) 1.95px 1.95px;
	font-size: 1.6rem;
	font-weight: 600;
	color: ${(props) => (props.$isdone ? "var(--c-white)" : "var(--c-black)")};
`;

const Button = styled.button`
	border: none;
	border-radius: 50%;
	width: 5.2rem;
	height: 5.2rem;
	background-color: ${(props) =>
		props.$isdone ? "var(--c-primary)" : "var(--c-primary-3)"};
	color: white;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	outline: none;
	margin-right: 1.4rem;
	&:hover {
		outline: 2px solid var(--c-primary);
	}
	&:active {
		animation: ${clickAnimation} 0.2s ease;
	}
`;

const GoalItem = ({ isDone, name, onClick }) => {
	return (
		<Container $isdone={isDone}>
			<Button $isdone={isDone} onClick={onClick}>
				{isDone ? "🎉" : ""}
			</Button>
			<p>{name}</p>
		</Container>
	);
};

export default GoalItem;
