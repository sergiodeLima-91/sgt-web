import './App.css';
import React, { useState } from 'react';
import logo from './components/logo.png'
import jsPDF from 'jspdf';

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [tipoTermo, setTipoTermo] = useState('');
  const [dadosForm, setDadosForm] = useState({
    // Inicialize os estados para todos os campos necessários
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosForm({ ...dadosForm, [name]: value });
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.text(`Nome da Empresa: ${dadosForm.nomeEmpresa}`, 10, 10);
    // Adicione mais campos conforme necessário
    doc.save('termo.pdf');
  };

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
      {/* TERMO DE ADESÃO */}
      <div>
      <select onChange={(e) => setTipoTermo(e.target.value)}>
        <option value="">Selecione o Tipo de Termo</option>
        <option value="ADESAO">ADESÃO</option>
        {/* Adicione mais opções conforme necessário */}
      </select>

      {tipoTermo === 'ADESAO' && (
        <>
          {/* Renderize os campos para ADESÃO */}
          <input
            type="text"
            name="nomeEmpresa"
            placeholder="Nome da Empresa"
            onChange={handleChange}
          />
          {/* Adicione mais campos de entrada conforme necessário */}
        </>
      )}

      {/* Renderize campos adicionais com base no tipoTermo se necessário */}

      <button onClick={gerarPDF}>Gerar Termo</button>
    </div>
    </div>

  );
}

export default App;
