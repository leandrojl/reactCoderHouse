import React from 'react';
import NavBar from './components/navBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/itemListContainer';
import HomePage from './container/HomePage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AboutUs from './container/AboutUs';
import ContactUs from './container/ContactUs';
import Products from './container/Products';



const Menu = () =>{
    return (
     <div className='App tc f3'>
      <BrowserRouter>

        <NavBar />

          <Switch>

            <Route exact path="/HomePage" >

              <HomePage />

            </Route>
            
            <Route exact path="/Products" >

              <Products />

            </Route>

            <Route path="/Products/Item/:id" >

              <ItemDetailContainer />

            </Route>

            <Route exact path="/AboutUs" >

              <AboutUs />

            </Route>

            <Route exact path="/ContactUs" >

              <ContactUs />

            </Route>   

          </Switch>

      </BrowserRouter>

      </div>
    );
}

export default Menu;