import React, { useState } from 'react';

function Accession() {
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
        {selectedOption && (
        <form 
        style={{
            width: '350px',
            margin:'20px',
            textAlign:'left',
            display:'flex',
            flexDirection:'column'
        }}>
          <input type='string' name='name'placeholder='NOME'style={{padding:'5px', margin:'10px'}}/>
          <input type='number' name='cpf-cnpj'placeholder='CPF/CNPJ'style={{padding:'5px', margin:'10px'}}/>
          <input type='string' name='streetch'placeholder='RUA'style={{padding:'5px', margin:'10px'}}/>
          <input type='number' name='numero'placeholder='NÚMERO'style={{padding:'5px', margin:'10px'}}/>
        </form>
      )}
      </div>
)}

export default Accession