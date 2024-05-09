import './App.css';
import React, { useState } from 'react';
import Logo from './components/Logo'
import Accession from './components/forms/Accession';
import jsPDF from 'jspdf';
import 'megadraft/dist/css/megadraft.css';

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [dadosForm, setDadosForm] = useState();

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
        <div
          className={`select-arrow ${showOptions ? 'open' : ''}`}
          onClick={handleArrowClick}
        >
        </div>
      <div>
        <Logo width="250px" heigth="250px" />
      </div>      
      {/* Seleção do tipo de termo no combobox: */}
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
        {selectedOption == 'Adesão' &&
            <Accession />
        }           
    </div>

   );  
}

export default App;
