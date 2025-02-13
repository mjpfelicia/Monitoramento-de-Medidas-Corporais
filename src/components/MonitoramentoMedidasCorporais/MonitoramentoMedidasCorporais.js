import Cabecalho from '../header/Header.js';
import IconeFitness from '../IconeFitness/IconeFitness.js';
import Dicas from '../Dicas/Dicas.js';
import Menu from '../Menu/Menu.js';
import './MonitoramentoMedidasCorporais.css';


const MonitoramentoMedidasCorporais = () => (
  <div className="container">
    <Menu />
    <Cabecalho />
    <IconeFitness />
    <Dicas />
  
  </div>
);

export default MonitoramentoMedidasCorporais;
