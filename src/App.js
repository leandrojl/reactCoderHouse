import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './container/itemListContainer';



const Menu = () =>{
    return (
     <div className='App tc f3'>
      <NavBar />
      
      <ItemListContainer/>

      
      </div>
    );
}

export default Menu;