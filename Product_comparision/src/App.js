import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './styles.css';
import './compare_style.css';
import 'bootstrap/dist/css/bootstrap.css'

import Product from './components/Product.js'
class App extends Component {
  render() {
   
    return (
      <div className="App">
     
       <Product/> 
        
      </div>
    );
  }
}

export default App;
