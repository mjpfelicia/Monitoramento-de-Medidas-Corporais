import React, { useState, useEffect } from 'react';

import silhuetaImg from '../../assets/img/corpo.png';
import Etiquetas from '../Etiquetas/Etiquetas';
import './IconeFitness.css';
import { obterDados } from '../../services/localStoreService';

const IconeFitness = () => {
  const [medidas, setMedidas] = useState([]);

  useEffect(() => {
    const medidasSalvas = obterDados('medidas');

    console.log({ medidasSalvas });

    if (medidasSalvas) {
      setMedidas(medidasSalvas);
    }
  }, []);


  return (
    <div className="icone-fit-person">
      <img src={silhuetaImg} alt="Ícone de pessoa fitness" className="icone-img" />
      <Etiquetas medidasAtuais={medidas} />
    </div>
  )
};

export default IconeFitness;
