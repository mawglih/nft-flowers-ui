import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './ui/regular/Layout';
import './App.css';
import Home from './ui/regular/Home';
import MarketPlace from './ui/regular/MarketPlace';
import ContactUs from './ui/regular/ContactUs';
import OwnedNFT from './ui/regular/OwnedNFT';
import AllOrders from './ui/regular/AllOrders';
import List from './ui/regular/List';

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="marketplace" element={<MarketPlace/> }>
          <Route index element={<List/>}/>
          <Route path="buy" element={<List/> }/>
          <Route path="owned" element={<OwnedNFT/>}/>
          <Route path="allorders" element={<AllOrders/>}/>
        </Route>
        <Route path="contactus" element={<ContactUs/>}/>
      </Routes>
    </Layout> 
  );
}

export default App;
