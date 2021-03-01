import React, { useState } from 'react';

function Menu() {
  const [menuList, setMenuList] = useState([
    'Create New Pokemon',
    'Attack',
    'Market Place',
  ]);

  const handleClick = el => {
    switch (el) {
      case 'Create New Pokemon':
        alert('hihi');
        //Create pokemon here :
        // Xai axios get pokemon
        // Luu vao database pokemon
        // get pokemon ra set Pokemon list o app.js
        // va hien no ra o MyPokemonList
        break;
    }
  };
  const listItems = menuList.map(el => (
    <div className="MenuIcon" onClick={() => handleClick(el)}>
      {el}
    </div>
  ));

  return <div className="Menu">{listItems}</div>;
}

export default Menu;
