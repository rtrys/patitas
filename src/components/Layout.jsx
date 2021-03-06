import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';

const Layout = props => (
  <div className="Layout">
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </div>
);

export default Layout;