import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryNavigation = () => {
	return (
		<nav className="navbar">
			<ul>
				<li><NavLink to="/categories/all">All</NavLink></li>
				<li><NavLink className={(navData) => navData.isActive ? 'nav-link-selected' : ''} to="/categories/Cat">Cat</NavLink></li>
				<li><NavLink className={(navData) => navData.isActive ? 'nav-link-selected' : ''} to="/categories/Dog">Dog</NavLink></li>
				<li><NavLink className={(navData) => navData.isActive ? 'nav-link-selected' : ''} to="/categories/Parrot">Parrot</NavLink></li>
				<li><NavLink className={(navData) => navData.isActive ? 'nav-link-selected' : ''} to="/categories/Reptile">Reptile</NavLink></li>
				<li><NavLink className={(navData) => navData.isActive ? 'nav-link-selected' : ''} to="/categories/Other">Other</NavLink></li>
			</ul>
			<style jsx>{`
			.nav-link-selected{
				background-color: lightgreen !important;
			}
			`}</style>
		</nav>
	);
};

export default CategoryNavigation;
