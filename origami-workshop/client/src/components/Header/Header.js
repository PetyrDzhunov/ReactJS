import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className={style.navigation}>
			<ul>
				<li className="listItem"><img src="/white-origami-bird.png" alt="white-origami" /></li>
				<Link to='/home'><NavigationItem>Going to home</NavigationItem></Link>
				<Link to='/about'><NavigationItem>Going to about</NavigationItem></Link>
				<Link to='/contactUs'><NavigationItem>Going to contacts</NavigationItem></Link>
				<Link to='/about/pesho'><NavigationItem>Pesho</NavigationItem></Link>
				<Link to='/about/44'><NavigationItem>Going to 5</NavigationItem></Link>
				<Link to='/about/stamat'><NavigationItem>Going to 6</NavigationItem></Link>
				<Link to='/about/mariyka'><NavigationItem>Going to 7</NavigationItem></Link>
				<Link to='/about/dido'><NavigationItem>Going to 8</NavigationItem></Link>
				<Link to='/about/ivan'><NavigationItem>Going to 9</NavigationItem></Link>
				<Link to='/about/tosho'><NavigationItem>Going to 10</NavigationItem></Link>
				<Link to='/about/gosho'><NavigationItem>Going to 11</NavigationItem></Link>
			</ul>
		</nav>
	);
}
export default Header;