import { useRef, useState } from "react";

import classes from './Demo.module.css';


const Demo = () => {
	const [state, setState] = useState({
		count: 11,
		step: 1
	});

	const onCounterButtonClickHandler = (e) => {
		setState((oldState) => ({ ...oldState, count: oldState.count + oldState.step }));

	};

	const onStepSelectChangeHandler = (e) => {
		const stepValue = Number(e.target.value);

		setState(oldState => ({ ...oldState, step: stepValue }));
	};


	return (
		<div>
			<h1>Counter</h1>
			<div>{count}</div>
			<button onClick={onCounterButtonClickHandler}>Increment
			</button>
			<label htmlFor="step">Step</label>
			<select onChange={onStepSelectChangeHandler} name="step" id="step">
				<option value="1"></option>
				<option value="2"></option>
				<option value="3"></option>
				<option value="4"></option>
			</select>
		</div>
	);
};

export default Demo;
