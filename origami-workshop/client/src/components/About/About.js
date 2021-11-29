
import React from 'react'
import { useParams, useNavigate, useLocation, } from 'react-router-dom';

const About = () => {
	const params = useParams();


	console.log(params);

	return (
		<main className="main-container">
			<h1>About {params.name} Page</h1>
		</main>
	);
};

export default About;
