import Cabecalho from '../header/Header.js';
import IconeFitness from '../IconeFitness/IconeFitness.js';
import FormularioMedidas from '../FormularioMedidas/FormularioMedidas.js';
import Dicas from '../Dicas/Dicas.js';
import './MonitoramentoMedidasCorporais.css';



const MonitoramentoMedidasCorporais = () => (
  <div className="container">
    <Cabecalho />
    <IconeFitness />
    <FormularioMedidas />
    <Dicas />
  </div>
);

export default MonitoramentoMedidasCorporais;
