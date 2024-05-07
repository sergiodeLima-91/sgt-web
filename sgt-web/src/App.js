import './App.css';
import React, { useState } from 'react';
import Logo from './components/Logo'
import Accession from './components/forms/Accession';

function App() {
  return (
    <div className='App'>
      <div>
        <Logo width="250px" heigth="250px" />
      </div>      
      {/* Seleção do tipo de termo no combobox: */}
      <Accession />      
    </div>

  );
}

export default App;
