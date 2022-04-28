import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LOgin from './Auth/Login/LOgin';
import RequireAuth from './Auth/RequireAuth';
import Header from './component/Header/Header';
import Home from './component/Home page/Home';
import Blog from './component/Blog/Blog'
import Register from './Auth/Register/Register';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import InventoryDetails from './component/InventoryDEtails/InventoryDetails';
import Inventories from './component/Inventory/Inventories';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:id' element={
         <InventoryDetails></InventoryDetails>
        }></Route>
     

        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<LOgin></LOgin>}></Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;