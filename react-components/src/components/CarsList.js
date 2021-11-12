import Car from './Car';

const CarsList = (props) => {
	return (
		<ul className="cars-list">
			{props.cars.map((car) => {
				return (<Car brand={car.brand} model={car.model} />)
			})}
		</ul>
	)
};

export default CarsList;
