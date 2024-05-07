import './App.css';
import React, { useState } from 'react';
import logo from './components/logo.png'

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    'Adesão',
    'Encaminhamento',
    'Declaração',
    'Cancelamento',
    'Outro',
  ];

  const handleArrowClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className='App'>
      <img src={logo} id='logo'/>
      {/* Seleção do tipo de termo no combobox: */}
      <div className="select-container">
        <div
          className={`select-arrow ${showOptions ? 'open' : ''}`}
          onClick={handleArrowClick}
        >
        </div>
        {/* Formulary */}
        <select
          className={`term-select ${showOptions ? 'open' : ''}`}
          value={selectedOption}
          onChange={(e) => handleOptionSelect(e.target.value)}
        >
          <option value="" disable hidden>O que você deseja fazer hoje?</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {selectedOption && (
        <p>Você selecionou: <strong>{selectedOption}</strong></p>
      )}
    </div>

  );
}

export default App;
