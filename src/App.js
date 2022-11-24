import logo from './logo.svg';
import './App.css';
import React from "react";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Header /> 
      <ItemListContainer greeting={"¡Bienvenidos!"} />
      <Banners /> 
      <Footer />
    </div>
    
  );
}

export default App;
