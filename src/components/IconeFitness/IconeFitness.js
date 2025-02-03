import silhuetaImg from '../../assets/img/corpo.png';
import Etiquetas from '../Etiquetas/Etiquetas';
import './IconeFitness.css';

const IconeFitness = () => (
  <div className="icone-fit-person">
    <img src={silhuetaImg} alt="Ícone de pessoa fitness" className="icone-img" />
    <Etiquetas />
  </div>
);

export default IconeFitness;
