import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home page/Home';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        
     
     
      
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;