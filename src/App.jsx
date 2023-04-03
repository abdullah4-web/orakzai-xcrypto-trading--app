import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Coins from './Coins';
import Exchanges from './Exchanges';
import Header from './Header';
import Footer from './Footer';
import CoinsDetails from './CoinsDetails';

 



function App() 
{
  return (
       <BrowserRouter>
      <Header />
       <Routes>
        <Route path ="/" element= {<Home/>} />
        <Route path ="/coins" element= {<Coins />} />
        <Route path="/coin/:id" element={< CoinsDetails />} />
        <Route path ="/exchanges" element= {<Exchanges />} />
       </Routes>
       <Footer />
       </BrowserRouter>
  );
}

export default App;
