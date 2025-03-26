import React from 'react';
import '../Etiquetas/Etiquetas.css';

const Etiquetas = ({ objetivos, medidasAtuais }) => {
  // Verifica se os dados são válidos antes de tentar acessar as propriedades
  const safeObjetivos = objetivos || {};
  const safeMedidasAtuais = Array.isArray(medidasAtuais)
    ? medidasAtuais[medidasAtuais.length - 1]
    : {};

  // Função para calcular a diferença entre a medida atual e o objetivo
  const calcularFaltante = (medidaAtual, objetivo) => {
    return objetivo && medidaAtual ? medidaAtual - objetivo : 0;
  };

  return (
    <div className="etiquetas">
      <div className="etiqueta etiqueta-peitoral">
        Peitoral: {safeMedidasAtuais?.peitoral || 'Defina seu objetivo'}
        {safeObjetivos.peitoral && safeMedidasAtuais.peitoral && (
          <span> Faltam {calcularFaltante(safeMedidasAtuais.peitoral, safeObjetivos.peitoral)} cm</span>
        )}
      </div>
      <div className="etiqueta etiqueta-abdomen">
        Abdômen: {safeMedidasAtuais?.abdomem || 'Defina seu objetivo'}
        {safeObjetivos.abdomen && safeMedidasAtuais.abdomem && (
          <span> Faltam {calcularFaltante(safeMedidasAtuais.abdomem, safeObjetivos.abdomen)} cm</span>
        )}
      </div>
      <div className="etiqueta etiqueta-cintura">
        Cintura: {safeMedidasAtuais?.cintura || 'Defina seu objetivo'}
        {safeObjetivos.cintura && safeMedidasAtuais.cintura && (
          <span> Faltam {calcularFaltante(safeMedidasAtuais.cintura, safeObjetivos.cintura)} cm</span>
        )}
      </div>
      <div className="etiqueta etiqueta-quadril">
        Quadril: {safeMedidasAtuais?.quadril || 'Defina seu objetivo'}
        {safeObjetivos.quadril && safeMedidasAtuais.quadril && (
          <span> Faltam {calcularFaltante(safeMedidasAtuais.quadril, safeObjetivos.quadril)} cm</span>
        )}
      </div>
      <div className="etiqueta etiqueta-coxa">
        Coxa: {safeMedidasAtuais?.coxa || 'Defina seu objetivo'}
        {safeObjetivos.coxa && safeMedidasAtuais.coxa && (
          <span> Faltam {calcularFaltante(safeMedidasAtuais.coxa, safeObjetivos.coxa)} cm</span>
        )}
      </div>
      <div className="etiqueta etiqueta-braco">
        Braço: {safeMedidasAtuais?.braco || 'Defina seu objetivo'}
        {safeObjetivos.braco && safeMedidasAtuais.braco && (
          <span> Faltam {calcularFaltante(safeMedidasAtuais.braco, safeObjetivos.braco)} cm</span>
        )}
      </div>
    </div>
  );
};

export default Etiquetas;
