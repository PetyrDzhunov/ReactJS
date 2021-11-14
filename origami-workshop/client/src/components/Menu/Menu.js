import MenuItem from './MenuItem';
import { useState } from 'react';
import './Menu.css';

import { menuItems } from './MenuConstants';

const Menu = ({
	onMenuItemClick,
}) => {
	const [currentItem, setCurrentItem] = useState();

	const menuItemClickHandler = (id) => {
		setCurrentItem(id);
		onMenuItemClick(id);
	};
	return (
		<aside className="menu">
			{menuItems.map(x =>
				<MenuItem
					key={x.id}
					id={x.id}
					onClick={menuItemClickHandler}
					isSelected={x.id == currentItem}
				>{x.text}
				</MenuItem>
			)}
		</aside>
	);
}
export default Menu;