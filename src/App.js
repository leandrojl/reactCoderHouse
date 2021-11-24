import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './container/itemListContainer';



const Menu = () =>{
    return (
     <div className='App tc f3'>
      <NavBar />
      
      <ItemListContainer brand="BRANDS" shop="SHOP" deals="DEALS" departments="DEPARTMENTS"/>

      
      </div>
    );
}

export default Menu;