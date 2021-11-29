
import React from 'react'
import { useParams } from 'react-router'

const AboutIdPage = () => {
	const params = useParams();
	console.log(params.id);
	return (
		<div className="main-container">
			<h1>About {params.id} page</h1>
		</div>
	)
}

export default AboutIdPage;
