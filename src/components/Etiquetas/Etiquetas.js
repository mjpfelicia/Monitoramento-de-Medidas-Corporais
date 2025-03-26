import React from 'react';
import '../Etiquetas/Etiquetas.css';

const Etiquetas = ({ objetivos, medidasAtuais }) => {
  // Verifica se os dados são válidos antes de tentar acessar as propriedades
  const safeObjetivos = objetivos || {};
  const safeMedidasAtuais = Array.isArray(medidasAtuais)
    ? medidasAtuais[medidasAtuais.length - 1]
    : {};

  // Adicionando logs para depuração
  console.log('Objetivos:', safeObjetivos);
  console.log('Medidas Atuais:', safeMedidasAtuais);

  return (
    <div className="etiquetas">
      <div className="etiqueta etiqueta-peitoral">
        Peitoral: {safeMedidasAtuais?.peitoral || 'Defina seu objetivo'}
      </div>
      <div className="etiqueta etiqueta-abdomen">
        Abdômen: {safeMedidasAtuais?.abdomem || 'Defina seu objetivo'}
      </div>
      <div className="etiqueta etiqueta-cintura">
        Cintura: {safeMedidasAtuais?.cintura || 'Defina seu objetivo'}
      </div>
      <div className="etiqueta etiqueta-quadril">
        Quadril: {safeMedidasAtuais?.quadril || 'Defina seu objetivo'}
      </div>
      <div className="etiqueta etiqueta-coxa">
        Coxa: {safeMedidasAtuais?.coxa || 'Defina seu objetivo'}
      </div>
      <div className="etiqueta etiqueta-braco">
        Braço: {safeMedidasAtuais?.braco || 'Defina seu objetivo'}


      </div>
    </div>
  );
};

export default Etiquetas;
