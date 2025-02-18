import React from 'react';
import './Ajuda.css';
import { Link } from 'react-router-dom';

const Ajuda = () => {
  return (
    <div className="container-ajuda">
      <h1>Tutoriais e Ajuda</h1>
      <section>
        <h2>Como adicionar medidas</h2>
        <p>Siga os passos abaixo para adicionar suas medidas:</p>
        <ol>
          <li>Clique no botão "Adicionar Medidas" no formulário.</li>
          <li>Preencha os campos de data e medidas corporais.</li>
          <li>Clique no botão "Salvar Medidas".</li>
        </ol>
      </section>
      <section>
        <h2>Como visualizar o gráfico</h2>
        <p>Siga os passos abaixo para visualizar o gráfico de suas medidas:</p>
        <ol>
          <li>Clique no botão "Ver Gráfico".</li>
          <li>Uma janela modal será aberta com o gráfico das suas medidas.</li>
          <li>Para fechar o gráfico, clique no botão "Fechar".</li>
        </ol>
      </section>
      <section>
        <h2>FAQ</h2>
        <p>Aqui você encontra respostas para perguntas frequentes:</p>
        <ul>
          <li><strong>Como posso editar minhas medidas?</strong> No momento, a edição de medidas ainda não está disponível, mas estamos trabalhando nisso!</li>
          <li><strong>Como posso excluir uma medida?</strong> Para excluir uma medida, você pode...</li>
        </ul>
      </section>
      <section>
        <h2>Links úteis</h2>
        <ul>
          <li><Link to="/formulario">Adicionar Medidas</Link></li>
          <li><Link to="/grafico">Ver Gráfico de Medidas</Link></li>
          <li><Link to="/IMCForm">Calculadora de IMC</Link></li>
          <li><Link to="/dica">Dicas para Medir</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default Ajuda;
