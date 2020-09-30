import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Collections from './components/Collections'
import Featured from './components/Featured'
import Sale from './components/Sale'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Home/>
      <Collections/>
      <Featured/>
      <Sale/>
      <Footer/>
    </div>
  );
}

export default App;
