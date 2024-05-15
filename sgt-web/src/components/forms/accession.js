import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { Page, Text, View, Document, StyleSheet } from '@mikecousins/react-pdf';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState } from 'draft-js';


function Accession() {    
  // Estado do editor de texto:
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // Estado do formulário:
  const [companyName, setCompanyName] = useState('');
  
  const gerarPDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    doc.text(`NOME DA EMPRESA: ${companyName}`, 20,20);

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
            {/* Editor de texto vai aqui */}          
            <Editor 
              editorState={editorState}
              onEditorStateChange={(newState) => setEditorState(newState)}
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