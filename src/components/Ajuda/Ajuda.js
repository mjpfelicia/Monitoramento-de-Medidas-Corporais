import React, { useState } from 'react';
import './Ajuda.css';
import { Link } from 'react-router-dom';

const Ajuda = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="container-ajuda">
      <h1 className="ajuda-title">Tutoriais e Ajuda</h1>

      {/* Seção: Como Adicionar Medidas */}
      <section className="ajuda-section">
        <h2>Como adicionar medidas</h2>
        <p>Siga os passos abaixo para adicionar suas medidas:</p>
        <ol>
          <li>Clique no botão "Adicionar Medidas" no formulário.</li>
          <li>Preencha os campos de data e medidas corporais.</li>
          <li>Clique no botão "Salvar Medidas".</li>
        </ol>
      </section>

      {/* Seção: Como Visualizar o Gráfico */}
      <section className="ajuda-section">
        <h2>Como visualizar o gráfico</h2>
        <p>Siga os passos abaixo para visualizar o gráfico de suas medidas:</p>
        <ol>
          <li>Clique no botão "Ver Gráfico".</li>
          <li>Uma janela modal será aberta com o gráfico das suas medidas.</li>
          <li>Para fechar o gráfico, clique no botão "Fechar".</li>
        </ol>
      </section>

      {/* Seção FAQ */}
      <section className="ajuda-section faq-section">
        <h2>FAQ</h2>
        <p>Aqui você encontra respostas para perguntas frequentes:</p>

        {/* Pergunta: Como editar minhas medidas */}
        <div className="faq-item">
          <strong>Como posso editar minhas medidas?</strong>
          <i
            className={`fa ${openFAQ === 0 ? 'fa-minus' : 'fa-plus'}`}
            onClick={() => toggleFAQ(0)}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          />
        </div>
        {openFAQ === 0 && (
          <p className="faq-answer">
            No momento, a edição de medidas ainda não está disponível, mas estamos trabalhando nisso!
          </p>
        )}

        {/* Pergunta: Como excluir uma medida */}
        <div className="faq-item">
          <strong>Como posso excluir uma medida?</strong>
          <i
            className={`fa ${openFAQ === 1 ? 'fa-minus' : 'fa-plus'}`}
            onClick={() => toggleFAQ(1)}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          />
        </div>
        {openFAQ === 1 && (
          <p className="faq-answer">
            Para excluir uma medida, você pode acessar o painel de medidas e clicar no ícone de excluir ao lado da medida desejada.
          </p>
        )}
      </section>

      {/* Seção: Links Úteis */}
      <section className="ajuda-section">
        <h2>Links úteis</h2>
        <ul>
          <li><Link to="/formulario">Adicionar Medidas</Link></li>
          <li><Link to="/grafico">Ver Gráfico de Medidas</Link></li>
          <li><Link to="/IMCForm">Calculadora de IMC</Link></li>
          <li><Link to="/dica">Dicas para Medir</Link></li>
          <li><Link to="/ComposicaoCorporal">Análise de Composição Corporal</Link></li>
          <li><Link to="/CalculoMacronutrientes">Calcular Macronutrientes e Calorias</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default Ajuda;
