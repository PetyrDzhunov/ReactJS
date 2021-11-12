import './Car.css'

const Car = (props) => {
	const { brand, model } = props;
	return (
		<div className="car-card">
			<p className="car-card__brand">{brand}</p>
			<p className="car-card__model">{model}</p>
		</div>
	)
};

export default Car;