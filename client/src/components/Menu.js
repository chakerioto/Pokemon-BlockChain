import React, { useState } from 'react';

function Menu() {
  const [menuList, setMenuList] = useState([
    'Create New Pokemon',
    'Attack',
    'Market Place',
  ]);

  const listItems = menuList.map(el => <div className="MenuIcon">{el}</div>);

  return <div className="Menu">{listItems}</div>;
}

export default Menu;
