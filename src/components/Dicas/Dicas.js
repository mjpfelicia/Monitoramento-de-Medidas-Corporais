import React from 'react';
import { Link } from 'react-router-dom'; // Adicionando a importação do Link
import { FaRuler, FaClock, FaHandPaper, FaAppleAlt, FaDumbbell, FaRunning } from 'react-icons/fa'; // Importando ícones
import './Dicas.css';

const Dicas = () => (
  <section className="dicas-section" aria-labelledby="dicas-heading">
    <header>
      <h2 id="dicas-heading">Dicas para Monitoramento de Medidas, Peso e Bem-estar</h2>
    </header>
    <div className="dicas-container">
      {/* Dicas de Medição */}
      <article className="dica-item" aria-labelledby="dica-1">
        <FaRuler className="dica-icon" aria-hidden="true" />
        <h3 id="dica-1">Use uma fita métrica flexível</h3>
        <p>Uma fita métrica flexível é essencial para garantir que você meça corretamente ao longo das curvas do corpo. Utilize uma fita sem marcas de metal ou rígida para maior precisão.</p>
      </article>
      <article className="dica-item" aria-labelledby="dica-2">
        <FaClock className="dica-icon" aria-hidden="true" />
        <h3 id="dica-2">Meça sempre no mesmo horário</h3>
        <p>É recomendado que as medições sejam feitas no mesmo horário todos os dias, preferencialmente pela manhã, quando o corpo está mais relaxado e livre de inchaços.</p>
      </article>
      <article className="dica-item" aria-labelledby="dica-3">
        <FaHandPaper className="dica-icon" aria-hidden="true" />
        <h3 id="dica-3">Não aperte a fita métrica</h3>
        <p>Certifique-se de que a fita métrica esteja justa, mas sem apertar demais a pele. O objetivo é medir a circunferência sem compressão, para garantir um resultado preciso.</p>
      </article>

      {/* Dicas de Alimentação */}
      <article className="dica-item" aria-labelledby="dica-4">
        <FaAppleAlt className="dica-icon" aria-hidden="true" />
        <h3 id="dica-4">Alimente-se com equilíbrio</h3>
        <p>Mantenha uma alimentação balanceada com a inclusão de alimentos frescos, como frutas, legumes e proteínas magras. Evite dietas restritivas e prefira a moderação no consumo.</p>
      </article>
      <article className="dica-item" aria-labelledby="dica-5">
        <FaAppleAlt className="dica-icon" aria-hidden="true" />
        <h3 id="dica-5">Beba muita água</h3>
        <p>A hidratação é fundamental para o bom funcionamento do corpo. Beba pelo menos 2 litros de água por dia, ajudando na digestão, circulação e na manutenção da saúde da pele.</p>
      </article>

      {/* Dicas de Exercício */}
      <article className="dica-item" aria-labelledby="dica-6">
        <FaDumbbell className="dica-icon" aria-hidden="true" />
        <h3 id="dica-6">Inclua exercícios de força</h3>
        <p>Adicione treinos de força à sua rotina para tonificar os músculos e melhorar a composição corporal. Exercícios como levantamento de peso e flexões são excelentes opções.</p>
      </article>
      <article className="dica-item" aria-labelledby="dica-7">
        <FaRunning className="dica-icon" aria-hidden="true" />
        <h3 id="dica-7">Não se esqueça do cardio</h3>
        <p>Exercícios cardiovasculares, como corrida ou caminhada rápida, são importantes para melhorar a saúde do coração e queimar calorias, auxiliando no controle de peso.</p>
      </article>
    </div>

    <footer className="dicas-links">
      <p>Quer saber mais sobre como monitorar suas medidas e melhorar seu bem-estar? Confira os links abaixo:</p>
      <ul>
        <li><Link to="/formulario">Adicionar Medidas</Link></li>
        <li><Link to="/grafico">Ver Gráfico de Medidas</Link></li>
        <li><Link to="/ComposicaoCorporal">Análise de Composição Corporal</Link></li>
      </ul>
    </footer>
  </section>
);

export default Dicas;
