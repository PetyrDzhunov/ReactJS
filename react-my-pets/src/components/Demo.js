import { useRef, useState } from "react";

import classes from './Demo.module.css';


const Demo = () => {
	const [nameInput, setNameInput] = useState('');
	const [ageInput, setAgeInput] = useState('');
	const [bioInput, setBioInput] = useState('bio');
	const [optionInput, setOptionInput] = useState('unemployed');
	const [emailInput, setEmailInput] = useState('');
	const [error, setError] = useState(false);

	const emailInputRef = useRef();

	const onEmailChange = (e) => {
		if (!emailInputRef.current.value.includes('@')) {
			setError(true);
			console.log('error');
			emailInputRef.current.focus();
		}
		setEmailInput(emailInputRef.current.value);
	};


	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(nameInput, ageInput);
	};

	const onUsernameChangeHandler = (e) => {
		setNameInput(e.target.value);
	};

	const onAgeChangeHandler = (e) => {
		setAgeInput(e.target.value);
	};

	const onBioChangeHandler = (e) => {
		setBioInput(e.target.value);
	};

	const onOptionChangeHanler = (e) => {
		setOptionInput(e.target.value);
	};


	return (
		<div style={{ display: 'flex', flexFlow: 'column' }}>
			<h1>Demo Form</h1>
			<form onSubmit={onSubmitHandler} >
				<div>
					<label htmlFor="username">Username</label>
					<input value={nameInput}
						onChange={onUsernameChangeHandler}
						type="text"
						name="username"
						id="username"
					/>
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<input onChange={onEmailChange} type="email" name="email" id="email" ref={emailInputRef} />
				</div>
				<div className={`input-validation ${error && classes.show}`}>Invalid Email</div>

				<div>
					<label htmlFor="age">Age</label>
					<input value={ageInput} onChange={onAgeChangeHandler} type="number" name="age" id="age" />
				</div>

				<div>
					<label htmlFor="bio">Bio</label>
					<textarea value={bioInput} name="bio" onChange={onBioChangeHandler} id="bio" />
				</div>

				<div>
					<label htmlFor="occupation">Occupation</label>
					<select onChange={onOptionChangeHanler} name="occupation" id="occupatio" value={optionInput}>
						<option value="it">IT</option>
						<option value="engineer">Engineer</option>
						<option value="unemployed">Unemployed</option>
					</select>
				</div>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Demo;
