import React from 'react';
import NavBar from './components/navBar/navBar';
import ItemList from './components/itemListContainer/itemListContainer';


const Menu = () =>{
    return (
     <div className='App tc f3'>
      <NavBar />
      
      <ItemList brand="BRANDS" shop="SHOP" deals="DEALS" departments="DEPARTMENTS"/>
      </div>
    );
}

export default Menu;