import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import classes from './Demo.module.css';


const Demo = () => {
	// const [state, setState] = useState({
	// 	count: 11,
	// 	step: 1
	// });


	const [count, setCount] = useState(1);
	const [step, setStep] = useState(1)
	// const [character, setCharacter] = useState({ name: "Nobody" });

	const [character, isLoading] = useFetch(`https://swapi.dev/api/people/${step}`, {});
	// useEffect(() => {
	// 	console.log('useeffect')
	// 	fetch(`https://swapi.dev/api/people/${step}`)
	// 		.then(res => res.json())
	// 		.then(char => setCharacter(char));

	// 	return () => {
	// 		console.log('cleanup func')
	// 	};
	// }, [step]);
	;

	const onCounterButtonClickHandler = (e) => {
		// setState((oldState) => ({ ...oldState, count: oldState.count + oldState.step }));
		setCount(oldState => oldState + step);
	};

	const onStepSelectChangeHandler = (e) => {
		const stepValue = Number(e.target.value);
		// setState(oldState => ({ ...oldState, step: stepValue }));
		setStep(stepValue);
	};


	return (
		<div>
			<h1>Counter</h1>
			<div>{count}</div>
			<button onClick={onCounterButtonClickHandler}>Increment
			</button>
			{isLoading && <div>LOADING...</div>}
			<h1>{character?.name}</h1>
			<label htmlFor="step">Step</label>
			<select onChange={onStepSelectChangeHandler} name="step" id="step">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
			<div>
				<Link to="/">Home</Link>
			</div>
		</div>
	);
};

export default Demo;
