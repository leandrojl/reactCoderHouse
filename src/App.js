import React from 'react';
import NavBar from './components/navBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/itemListContainer';



const Menu = () =>{
    return (
     <div className='App tc f3'>
      <NavBar />
      
      <ItemListContainer/>
      
      <ItemDetailContainer />

      
      </div>
    );
}

export default Menu;