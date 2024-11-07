import React from 'react'
import './ajudaPage.css';
import Header_admin from "../../adminComponents/headerAdmin/header_admin";

function AjudaPage() {
    return (
      
      <div className='help'>
         <Header_admin />
        <div className='help-container'>

          <div className='help-title'>
            <h1>Bem-vindo!</h1>
          </div>

          <div className='help-texts'>
            <div className='help-text'>
              <h1>Escolas</h1>
              <p>Administre o cadastro das escolas assinantes.</p>
            </div>

            <div className='help-text'>
              <h1>Catálogo</h1>
              <p>Visualize e edite o catálogo de livros disponibilizados na plataforma. 
                <br/>Para adicionar um livro, envie um arquivo editado seguindo as especificações{" "}
            <a href="/Catalogo" className='help-aqui'>
            aqui
            </a>{" "} e envie as animações desejadas para inserir no arquivo de texto.
              </p>
            </div>

            <div className='help-text'>
              <h1>Relatórios</h1>
              <p>
                Veja o quão bem estamos. Analise gráficos com parametros relevantes para o controle e crescimento do aplicativo/plano.
              </p>
            </div>
          </div>
          <p className='help-doc'>
            Precisa de uma mãozinha? Consulte nossa{" "}
            <a href="/path/to/your/pdf/documentacao.pdf" download className='help-doc-download'>
            documentação
            </a>{" "}
            e tire suas dúvidas.
          </p>
          <div className='help-downloads'>
            <a className='help-download-btn' download href='/path/to/your/pdf/documentacao.pdf'>Download PDF catálogo</a>
            <a className='help-download-btn' download href='/path/to/your/pdf/documentacao.pdf'>Download PDF Relatórios</a>
          </div>
        </div>
      </div>
    );
  }
  
export default AjudaPage;