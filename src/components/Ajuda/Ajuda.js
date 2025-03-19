import React, { useState } from 'react';
import './Ajuda.css'; // Certifique-se de ter o CSS adequado para os novos estilos.
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
          <li>Clique no botão <strong>"Adicionar Medidas"</strong> no formulário.</li>
          <li>Preencha os campos de data e medidas corporais.</li>
          <li>Clique no botão <strong>"Salvar Medidas"</strong>.</li>
        </ol>
      </section>

      {/* Seção: Como Visualizar o Gráfico */}
      <section className="ajuda-section">
        <h2>Como visualizar o gráfico</h2>
        <p>Siga os passos abaixo para visualizar o gráfico de suas medidas:</p>
        <ol>
          <li>Clique no botão <strong>"Ver Gráfico"</strong>.</li>
          <li>Uma janela modal será aberta com o gráfico das suas medidas.</li>
          <li>Para fechar o gráfico, clique no botão <strong>"Fechar"</strong>.</li>
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
        <div className="cards-container">
          <div className="card">
            <Link to="/formulario" className="card-link">
              <div className="card-icon">
                <i className="fas fa-plus-circle"></i>
              </div>
              <div className="card-text">
                <h3>Adicionar Medidas</h3>
                <p>Acesse esta página para adicionar novas medidas corporais ao seu perfil.</p>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/grafico" className="card-link">
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="card-text">
                <h3>Ver Gráfico de Medidas</h3>
                <p>Visualize um gráfico das suas medidas ao longo do tempo.</p>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/IMCForm" className="card-link">
              <div className="card-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <div className="card-text">
                <h3>Calculadora de IMC</h3>
                <p>Calcule seu Índice de Massa Corporal com base em suas medidas.</p>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/dica" className="card-link">
              <div className="card-icon">
                <i className="fas fa-ruler"></i>
              </div>
              <div className="card-text">
                <h3>Dicas para Medir</h3>
                <p>Encontre orientações sobre como realizar medições corporais de maneira precisa.</p>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/ComposicaoCorporal" className="card-link">
              <div className="card-icon">
                <i className="fas fa-dna"></i>
              </div>
              <div className="card-text">
                <h3>Análise de Composição Corporal</h3>
                <p>Acompanhe a evolução da composição do seu corpo.</p>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/CalculoMacronutrientes" className="card-link">
              <div className="card-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <div className="card-text">
                <h3>Calcular Macronutrientes e Calorias</h3>
                <p>Calcule a quantidade de macronutrientes e calorias diárias necessárias.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ajuda;
