import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { Page, Text, View, Document, StyleSheet } from '@mikecousins/react-pdf';
import { EditorState } from 'draft-js';
import { MegadraftEditor } from 'megadraft';


function Accession() {
  // Estado do Editor de texto:
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  // Estado do formulário:
  const [companyName, setCompanyName] = useState('');
  
  const gerarPDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    doc.text(`NOME DA EMPRESA: ${companyName}`, 20,20);

    // Colocando dados do editor de texto no PDF:
    const contentState = editorState.getCurrentContent();
    const contentText = contentState.getPlainText();
    doc.text(contentText, 20, 40); 

    return doc.save('termo-de-adesao.pdf')
    }

    return (
        <div className="select-container">        
          <form
          name='form' 
          style={{
              width: '350px',
              margin:'20px',
              textAlign:'left',
              display:'flex',
              flexDirection:'column'
          }}>
            {/* Editor de Texto */}
            <MegadraftEditor 
              editorState={editorState}
              onChange={setEditorState}
              placeholder="Detalhes do contrato"
            />

            <input type='string' name='companyName'placeholder='NOME DA EMPRESA'value={companyName} onChange={(e) => setCompanyName(e.target.value)} style={{padding:'5px', margin:'10px'}}/>
            <input type='number' name='cnpj'placeholder='CNPJ'style={{padding:'5px', margin:'10px'}}/>
            <input type='string' name='streetch'placeholder='RUA'style={{padding:'5px', margin:'10px'}}/>
            <input type='number' name='numero'placeholder='NÚMERO'style={{padding:'5px', margin:'10px'}}/>
            <button onClick={gerarPDF}>Baixar Termo</button>            
          </form>
      </div>
)}

export default Accession